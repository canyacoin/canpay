import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../result/result.service';
import { FormData } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { PaymentServiceERC } from './payment-erc20.service';
import { Subscription } from 'rxjs';
import { ResizeService } from '../../lib/services/resize.service';
export interface ConfirmModel {
    title: string;
    message: string;
}
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { ResultComponent } from '../result/result.component';

@Component({
    selector: 'canyalib-mt-wizard-erc20'
    , templateUrl: './payment-erc20.component.html',
    styleUrls: ['../payment/details.component.css']
})

export class PaymentERCComponent implements OnInit {
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
    @Output() valueChange = new EventEmitter();

    constructor(dialogService: DialogService, private router: Router, private resizeService: ResizeService,
        private formDataService: FormDataService, private paymentService: PaymentServiceERC, private resultService: ResultService) {
            alert('hello')
    }

    search(val) {
        this.tokens = this.tokenData1.filter(c => c.name.toUpperCase().match(val.toUpperCase()) || c.symbol.toUpperCase().match(val.toUpperCase()));
    }

    ngOnInit() {
        this.workType = this.formDataService.getConfirmation();
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();

        this.paymentService.getTokens().subscribe(data => {
            this.tokenData1 = data;
            for (const result of data) {
                this.tokens.push(result);
            }
        });

        this.paymentService.getSessionId().subscribe(data => {
            this.key = data.token;
            this.status = data.status;
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

    selectCurrency(form, key) {
        this.selectedERC = form.symbol;
        this.otherstest = form.name;
        this.formData.currency = form.name;

        this.formData.erc20token = form.address;
        this.formData.erc20tokenDecimal = form.decimals;
        this.others = !this.others;
        this.paymentService.getData(form.symbol).subscribe(
            (data) => {
                const price = data.data.price * + this.formData.amount;
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

    goToPrevious(form: any) {
        if (this.save(form)) {
        }
    }

    cancel() {
        this.formData.email = '';
    }

    goToNext(form: any, key: any) {

        if (this.save(form) && this.status && this.formData.currency !== 'erc20') {
            this.error = null;
            this.formData.key = key;
            // Navigate to the result page
            this.formData.accept = true;

        } else {
            this.error = 'Please select a token';
        }
    }
}