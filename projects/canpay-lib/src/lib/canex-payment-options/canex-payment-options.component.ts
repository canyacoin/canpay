import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/take';

import { Step } from '../interfaces';
import { CanexService } from '../services/canex.service';
import { FormData, FormDataService, Personal } from '../services/formData.service';
import { ResizeService } from '../services/resize.service';

@Component({
    selector: 'canyalib-canex-payment-options'
    , templateUrl: './canex-payment-options.component.html',
    styleUrls: ['./canex-payment-options.component.css']
})

export class CanexPaymentOptionsComponent implements OnInit, OnDestroy {
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
    @Input() balance = 0;

    sessionSub: Subscription;
    cmcSub: Subscription;

    constructor(private router: Router, private resizeService: ResizeService, private formDataService: FormDataService,
        private canexService: CanexService) {
    }

    ngOnInit() {
        if (!this.destinationAddress) {
            this.valueChange.emit(Step.canexError);
        }
        this.workType = this.formDataService.getConfirmation();
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('sending to: ' + this.destinationAddress);
        this.formData.address = this.destinationAddress;
        this.formData.email = this.userEmail;
        this.formData.amount = this.amount - this.balance;

        this.sessionSub = this.canexService.getSessionId().subscribe(data => {
            this.key = data.json().token;
            this.status = data.json().status;
        });

        this.cmcSub = this.canexService.getDataCmc('ETH').subscribe(
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

    ngOnDestroy() {
        if (this.resizeSubscription) { this.resizeSubscription.unsubscribe(); }
        if (this.cmcSub) { this.cmcSub.unsubscribe(); }
        if (this.sessionSub) { this.sessionSub.unsubscribe(); }
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
                    this.valueChange.emit(Step.canexQr);
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
            this.valueChange.emit(Step.canexErc20);
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
        this.valueChange.emit(Step.balanceCheck);
    }

    goToNext() {
        if (this.validData === true) {
            this.valueChange.emit(Step.canexQr);
        }
    }

    cancel() {
        this.formData.email = '';
        // this.valueChange.emit(Step.none);
    }
}
