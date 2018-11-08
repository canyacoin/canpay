import {
    Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

import {
    CanPay, CanPayData, Contract, Operation, PaymentSummary, ProcessAction, ProcessActionResult,
    Step, View
} from '../interfaces';
import { CanYaCoinEthService } from '../services/canyacoin-eth.service';

@Component({
  selector: 'canyalib-canpay',
  templateUrl: './canpay-wizard.component.html',
  styleUrls: ['./canpay-wizard.component.scss'],
  // encapsulation: ViewEncapsulation.Native
})
export class CanpayWizardComponent implements OnInit, OnDestroy {
  @Output() complete = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() startPostAuthorisationProcess = new EventEmitter();
  @Output() currentStep = new EventEmitter();

  @Input() view = View.Normal;
  @Input() postAuthorisationProcessName;
  @Input() operation = Operation.auth;
  @Input() onAuthTxHash;
  @Input() recipient;
  @Input() dAppName;
  @Input() successText;
  @Input() amount = 0;
  @Input() paymentSummary: PaymentSummary;
  @Input() minAmount = 0;
  @Input() maxAmount = 0;
  @Input() disableCanEx = false;
  @Input() destinationAddress;
  @Input() userEmail;

  @Input() set canyaContract(canyaContract: Contract) {
    console.log('setting up canyaContract: ', canyaContract);
    this.canyaCoinEthService.initContract(canyaContract.abi, canyaContract.address);
  }

  @Input() set postAuthorisationProcessResults(postAuthorisationProcessResults: ProcessActionResult) {
    this.doCompletePostAuthorisationProcess(postAuthorisationProcessResults);
  }

  View = View;
  Step = Step; // to access the enum from the .html template
  errMsg: string;
  steps: Array<any>;
  currStep: Step;
  title = 'Payment';
  isLoading = false;
  balance = 0;
  account: string;
  confirmationDlg = {
    type: 'success',
    title: 'Sweet, payment done!',
    controls: {
      ok: true
    }
  };
  insufficientBalance = false;
  processSummaryMsg: string;
  balanceInterval: any;

  constructor(private canyaCoinEthService: CanYaCoinEthService) { }

  ngOnInit() {
    this.steps = [
      {
        name: 'Pay Amount',
        value: Step.paymentAmount,
        active: !this.amount && this.operation !== Operation.interact
      },
      {
        name: 'Payment Summary',
        value: Step.paymentSummary,
        active: true
      },
      {
        name: 'Metamask',
        value: Step.metamask,
        active: true
      },
      {
        name: 'Balance Check',
        value: Step.balanceCheck,
        active: this.operation !== Operation.interact
      },
      {
        name: 'Authorisation',
        value: Step.authorisation,
        active: this.operation === Operation.auth
      },
      {
        name: 'Payment',
        value: Step.payment,
        active: this.operation === Operation.pay
      },
      {
        name: this.postAuthorisationProcessName,
        value: Step.process,
        active: !!this.postAuthorisationProcessName || this.operation === Operation.interact
      },
      {
        name: 'Confirmation',
        value: Step.confirmation,
        active: true
      }
    ].filter(step => step.active);

    this.updateCurrentStep(this.steps.find(step => step.active === true).value);
    console.log('step: ', this.currStep);

    const validationErrors = [];
    if (!this.dAppName) {
      validationErrors.push('Missing dAppName');
    }

    if (!this.recipient) {
      validationErrors.push('Missing recipient address');
    }

    if (validationErrors.length) {
      this.error(validationErrors.join(' | '), false);
    }

    if (this.successText) {
      this.confirmationDlg.title = this.successText;
    }
  }


  ngOnDestroy() {
    if (this.balanceInterval) { clearInterval(this.balanceInterval); }
  }

  updateCurrentStep(step) {
    this.currStep = step;
    this.title = this.steps.find(x => x.value === step).name || 'Payment';
    this.currentStep.emit(step);
  }

  setAccount(_acc) {
    console.log('setAccount: ', _acc);
    this.account = _acc;
    setTimeout(() => this.operation === Operation.interact
      ? this.updateCurrentStep(Step.process)
      : !this.amount
        ? this.updateCurrentStep(Step.paymentAmount)
        : this.checkBalance(), 200);
  }

  setAmount(amount) {
    console.log('setAmount: ', amount);
    this.amount = amount;
    this.updateCurrentStep(Step.paymentSummary);
    // this.checkBalance();
  }

  checkBalance() {
    this.updateCurrentStep(Step.balanceCheck);
    this.isLoading = true;
    this.balanceInterval = setInterval(() => {
      this.canyaCoinEthService.getCanYaBalance(this.canyaCoinEthService.getOwnerAccount())
        .then(_balance => {
          this.balance = Number(_balance);
          this.insufficientBalance = Number(_balance) < this.amount;
          if (!this.insufficientBalance) {
            this.updateCurrentStep(this.postBalanceStep);
            clearInterval(this.balanceInterval);
          }
        })
        .catch(err => this.error('Unable to retrieve user CAN balance!'))
        .then(() => this.isLoading = false);
    }, 3000);
  }
  purchaseComplete() {
    if (this.balanceInterval) { clearInterval(this.balanceInterval); }
    this.stepChanger(this.postBalanceStep);
  }

  get postBalanceStep() {
    return this.operation === Operation.auth ? Step.authorisation : this.operation === Operation.interact ? Step.process : Step.payment;
  }

  stepChanger(step) {
    this.currStep = step;
  }

  getCanExRecipient(): string {
    return this.destinationAddress || this.canyaCoinEthService.getOwnerAccount();
  }

  notifyPaymentAuthorised(tx) {
    console.log('authorisedTx: ', tx);
    this.updateCurrentStep(this.postAuthorisationProcessName ? Step.process : Step.confirmation);
  }

  notifyPaymentCollected(tx) {
    console.log('paidTx: ', tx);
    this.updateCurrentStep(this.postAuthorisationProcessName ? Step.process : Step.confirmation);
  }

  doStartPostAuthorisationProcess() {
    this.startPostAuthorisationProcess.emit(this.canPayData());
  }

  doCompletePostAuthorisationProcess(postAuthorisationProcessResults) {
    if (!postAuthorisationProcessResults) { return; }

    if (postAuthorisationProcessResults.type === ProcessAction.success) {
      this.updateCurrentStep(Step.confirmation);
      return;
    }

    if (postAuthorisationProcessResults.type === ProcessAction.error) {
      return this.error(postAuthorisationProcessResults.msg);
    }
  }

  canPayData(): CanPayData {
    return {
      currStep: this.currStep,
      amount: this.amount,
      account: this.account,
      balance: this.balance
    };
  }

  doCancel() {
    this.cancel.emit(this.canPayData());
  }

  finish() {
    this.complete.emit(this.canPayData());
  }

  error(msg, autoDismiss = true) {
    this.errMsg = msg;
    if (autoDismiss) {
      setTimeout(() => this.errMsg = null, 30000);
    }
  }
}
