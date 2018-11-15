import { Component } from '@angular/core';

import { DaoEthService } from 'src/app/services/dao.eth.service';
import { environment } from 'src/environments/environment';

import {
    CanPay, CanPayData, CanPayService, Operation, ProcessAction, setProcessResult
} from 'canpay-lib';

@Component({
  selector: 'app-can-pay-example',
  templateUrl: './can-pay-example.component.html',
  styleUrls: ['./can-pay-example.component.css']
})
export class CanPayExampleComponent {
  isVisible = true;

  canPay: CanPay = {
    // properties
    dAppName: 'CanYaDAO',
    successText: 'Mission success!', // Default 'Sweet, payment done!'
    recipient: environment.contracts.canYaDao,
    operation: Operation.auth, // Authorise, Pay or Interact, Default is: Authorise
    onAuthTxHash: function () { }.bind(this), // Call a function after the txHash is available (i.e. once the tx has been sent)
    amount: 0, // allow the user to enter amount through an input box
    minAmount: 1000, // Default is 1
    maxAmount: 50000, // Default is 'No Maximum'

    // CanExchange
    userEmail: 'example@gmail.com', // email to which the canexchange confirmation should be sent
    disableCanEx: true,
    // Actions
    complete: this.completeCanPayUserActivation.bind(this),
    cancel: this.cancelCanPayUserActivation.bind(this),

    // Post Authorisation
    postAuthorisationProcessName: 'User Activation',
    startPostAuthorisationProcess: this.startCanPayUserActivation.bind(this),
    postAuthorisationProcessResults: null
  };

  constructor(private daoEthService: DaoEthService, private canPayService: CanPayService) { }

  onAuthTxHash() {

  }

  startCanPayUserActivation(canPayData: CanPayData) {
    console.log(canPayData);

    const onTxCallback = (txHash: string, from: string) => {
      // do something, like submit the transaction to the transaction monitoring service
    };

    this.daoEthService.createUserEscrow(canPayData.account, canPayData.amount, onTxCallback)
      // setProcessResult is a helper utility that takes the returned 'tx' from the 'createUserEscrow' and set the appropriate result as failed or success tx.
      .then(setProcessResult.bind(this.canPay))
      .catch(setProcessResult.bind(this.canPay));
  }

  completeCanPayUserActivation(canPayData: CanPayData) {
    console.log(canPayData);
    this.isVisible = false;
  }

  cancelCanPayUserActivation(canPayData: CanPayData) {
    console.log(canPayData);
    this.isVisible = false;
  }

  modalCanPay() {
    this.canPayService.open(this.canPay);
  }
}
