import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../../canexchange/result/result.service';
import { FormData } from '../../canexchange/data/formData.model';
import { FormDataService } from '../../canexchange/data/formData.service';
import { PaymentService } from '../../canexchange/payment/payment.service';
import { ResizeService } from '../../lib/services/resize.service';
import { Subscription } from 'rxjs';
import * as globals from '../../canexchange/globals';

@Component({
    selector: 'canyalib-mt-wizard-payment-details'
    , templateUrl: './payment-details.component.html',
    styleUrls: ['./payment-details.component.css']
})

export class PaymentDetailsComponent implements OnInit {
    title = 'Please Review and Confirm Your Transaction!';
    workType: boolean;
    form: any;
    @Input() formData: FormData;
    isFormValid = false;
    can = false;
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
    displayEth = false;

    constructor(private router: Router, private resizeService: ResizeService, private formDataService: FormDataService,
        private paymentService: PaymentService, private resultService: ResultService) {
    }

    ngOnInit() {
        this.workType = this.formDataService.getConfirmation();
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();

        this.paymentService.getTokens().subscribe(data => {
            for (const result of data) {
                this.tokens.push(result);
            }
        });

        this.paymentService.getSessionId().subscribe(data => {
            this.key = data.token;
            this.status = data.status;
        });

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
            this.paymentService.getData(currency).subscribe(
                (data) => {
                    const price = data.data.price * +this.formData.amount;
                    this.formData.eth = +price.toFixed(6);
                    this.etherPrise = +price.toFixed(6);
                    this.validData = true;
                    this.displayEth = true;
                }
            );

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
    }

    goToNext() {
        if (this.validData === true) {
        }
    }

    cancel() {
        this.formData.email = '';
    }
}