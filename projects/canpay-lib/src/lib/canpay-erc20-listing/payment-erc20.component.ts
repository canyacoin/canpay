import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ResizeService } from '../../lib/services/resize.service';
import { Step } from '../canpay-wizard/canpay-wizard.component';
import { CanexService } from '../services/canex.service';
import { FormData, FormDataService } from '../services/formData.service';

@Component({
    selector: 'canyalib-mt-wizard-erc20-details'
    , templateUrl: './payment-erc20.component.html',
    styleUrls: ['../canpay-payment-details/payment-details.component.css']
})

export class PaymentERCDetailsComponent implements OnInit {
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
    selectedERC: string;
    price: any;
    message: string;
    tokenData1: any;
    token_classes = '';
    private resizeSubscription: Subscription;
    listStatus = true;

    @Output() valueChange = new EventEmitter();

    constructor(private router: Router, private resizeService: ResizeService,
        private formDataService: FormDataService, private canexService: CanexService) {
    }

    search(val) {
        // for erc token search
        this.tokens = this.tokenData1.filter(c => c.name.toUpperCase().match(val.toUpperCase()) || c.symbol.toUpperCase().match(val.toUpperCase()));
    }

    ngOnInit() {
        this.workType = this.formDataService.getConfirmation();
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();

        // get list of supported erc20 tokens
        this.canexService.getTokensBancor().subscribe(data => {
            this.tokenData1 = data;
            this.listStatus = false;
            for (const result of data.json()) {
                this.tokens.push(result);
            }
        });

        // get status
        this.canexService.getSessionId().subscribe(data => {
            this.key = data.json().token;
            this.status = data.json().status;
        });

        if (window.innerWidth < 769) {
            this.token_classes = 'card-holder col-xs-6';
        } else {
            this.token_classes = 'card-holder col-xs-4';
        }

        this.resizeSubscription = this.resizeService.onResize$.subscribe(size => {
            if (size.innerWidth < 769) {
                this.token_classes = 'card-holder col-xs-6';
            } else {
                this.token_classes = 'card-holder col-xs-4';
            }
        });
    }

    // to convert erc20 token to CAN
    selectCurrency(form, key) {
        this.selectedERC = form.symbol;
        this.otherstest = form.address;
        this.formData.currency = form.name;
        this.formData.erc20token = form.address;
        this.formData.erc20tokenDecimal = form.decimals;
        this.others = !this.others;

        this.canexService.getData(form.symbol).subscribe(
            (data) => {
                const price = data.json().data.price * + this.formData.amount;
                this.price = price;
                this.formData.eth = Number(price.toFixed(6));
                this.etherPrise = Number(price.toFixed(6));
            }
        );


        if (this.status && this.formData.currency != null) {
            this.error = null;
            this.formData.key = key;
            // Navigate to the result page
            this.formData.accept = true;
        } else {
            this.error = 'Oops! something went wrong, Please try again later.';
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
        this.valueChange.emit(Step.erc20);
    }

    cancel() {
        this.formData.email = '';
        this.valueChange.emit(Step.details);
    }

    goToNext(form: any, key: any) {

        if (this.save(form) && this.status && this.formData.currency !== 'erc20') {
            this.error = null;
            this.formData.key = key;
            // Navigate to the result page
            this.formData.accept = true;
            this.valueChange.emit(Step.qr);

        } else {
            this.error = 'Please select a token';
        }
    }
}
