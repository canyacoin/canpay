import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ResizeService } from '../../lib/services/resize.service';
import { FormData, Personal } from '../canpay-data/formData.model';
import { FormDataService } from '../canpay-data/formData.service';
import { CanpayWizardComponent, Step } from '../canpay-wizard/canpay-wizard.component';
import { PaymentDetailsService } from './payment-details.service';

@Component({
    selector: 'canyalib-mt-wizard-payment-details'
    , templateUrl: './payment-details.component.html',
    styleUrls: ['./payment-details.component.css']
})

export class PaymentDetailsComponent implements OnInit {
    title = 'Please Review and Confirm Your Transaction!';
    workType: boolean;
    form: any;
    isFormValid = false;
    can = false;
    @Input() formData: FormData;
    etherium = false;
    etherPrise: number;
    key: any;
    status: any;
    error: any;
    tokens: any = [];
    others = false;
    otherstest: any;
    message: string;
    changeButtonToSelectCurrency = false;
    erc20 = false;
    validData = false;
    token_classes = '';
    private resizeSubscription: Subscription;
    @Output() valueChange = new EventEmitter();
    personal: Personal;
    @Input() destinationAddress;
    @Input() userEmail;
    @Input() amount: number;

    constructor(private router: Router, private resizeService: ResizeService, private formDataService: FormDataService,
        private paymentService: PaymentDetailsService, private canpayWizardComponent: CanpayWizardComponent) {
    }

    ngOnInit() {

        this.workType = this.formDataService.getConfirmation();
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        this.formData.address = this.destinationAddress;
        this.formData.email = this.userEmail;
        this.formData.amount = this.amount - this.canpayWizardComponent.canPayData().balance;
        this.paymentService.getTokens().subscribe(data => {
            for (const result of data) {
                this.tokens.push(result);
            }
        });

        this.paymentService.getSessionId().subscribe(data => {
            this.key = data.json().token;
            this.status = data.json().status;
        });

        this.paymentService.getDataCmc('ETH').subscribe(
            (data) => {

                this.formData.eth = Number((this.formData.amount * data.json().data.quotes.ETH.price).toFixed(6));
                this.formData.usd = Number((this.formData.amount * data.json().data.quotes.USD.price).toFixed(6));
                this.etherPrise = this.formData.eth;
            }
        );

        if (window.innerWidth < 769) {
            this.token_classes = 'card-holder col-xs-6 payment-margin-right';
        } else {
            this.token_classes = 'card-holder col-xs-4 payment-margin-right';
        }

        this.resizeSubscription = this.resizeService.onResize$.subscribe(size => {
            if (size.innerWidth < 769) {
                this.token_classes = 'card-holder col-xs-6 payment-margin-right';
            } else {
                this.token_classes = 'card-holder col-xs-4 payment-margin-right';
            }
        });
    }

    OnDestroy() {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    }

    selectCurrency(currency) {

        this.otherstest = currency;
        this.formData.currency = currency;

        if (currency === 'ETH') {
            this.changeButtonToSelectCurrency = false;
            this.erc20 = false;
            this.can = false;
            this.etherium = !this.etherium;
            this.others = false;
            this.validData = true;

            setTimeout(() => {
                if (this.status && this.formData.currency != null) {
                    this.error = null;
                    this.formData.key = this.key;
                    // Navigate to the result page
                    this.formData.accept = true;
                    this.formDataService.setConfirmation(this.workType);
                } else {
                    this.validData = false;
                    this.error = 'Oops! something went wrong, Please try again later.';
                }
            }, 1000);

        } else {
            this.changeButtonToSelectCurrency = true;
            this.etherium = false;
            this.erc20 = !this.erc20;
            this.others = false;
            this.valueChange.emit(Step.erc20);
        }
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setConfirmation(this.workType);
        return true;
    }

    goToPrevious() {
        this.valueChange.emit(Step.details);
    }

    goToNext() {
        if (this.validData === true) {
            this.valueChange.emit(Step.qr);
        }
    }

    cancel() {
        this.formData.email = '';
        // this.valueChange.emit(Step.none);
    }
}
