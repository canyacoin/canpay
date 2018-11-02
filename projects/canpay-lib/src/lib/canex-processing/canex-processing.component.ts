import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/take';

import { Step } from '../canpay-wizard/canpay-wizard.component';
import { CanexService } from '../services/canex.service';
import { FormData, FormDataService, Personal } from '../services/formData.service';

@Component({
    selector: 'canyalib-canex-processing'
    , templateUrl: './canex-processing.component.html',
    styleUrls: ['../canex-payment-options/canex-payment-options.component.css']
})

export class CanexProcessingComponent implements OnInit, OnDestroy {
    title = 'Booyah! CAN sent.';
    titleSecond = 'Your receipt has been emailed. ';
    @Input() formData: FormData;
    isFormValid = false;
    etherUrl: string;
    personal: Personal;
    activities: any[] = [];
    message: string;
    orderUrl: string;
    @Output() valueChange = new EventEmitter();

    statusSub: Subscription;
    statusSub2: Subscription;

    constructor(private router: Router, private formDataService: FormDataService,
        private canexService: CanexService) {
        this.statusSub = interval(2000).subscribe(x => {
            try {
                if (this.statusSub2) { this.statusSub2.unsubscribe(); }
                this.statusSub2 = this.canexService.checkStatus(this.formData.key).subscribe(activity => {
                    try {
                        if (activity.json().status === 'COMPLETE') {
                            this.valueChange.emit(Step.canexReceipt);
                        } else if (activity.json().status === 'ERROR') {
                            this.valueChange.emit(Step.canexError);
                        }
                    } catch (e) {

                    }
                });
            } catch (e) {
            }
        });
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        this.etherUrl = 'https://etherscan.io/tx/' + this.formData.hash;
        this.orderUrl = 'http://staging.canexchange.io/#/order/' + this.formData.key;
        this.canexService.sentMailStaging(this.formData.key);
        this.canexService.submitPost(this.formData);
    }

    ngOnDestroy() {
        if (this.statusSub) { this.statusSub.unsubscribe(); }
        if (this.statusSub2) { this.statusSub2.unsubscribe(); }
    }

    showActivity(activity: any) {

        const existingActivity = false;
        const obj: any = JSON.parse(activity);

        this.formData.hash = obj.hash;
        this.formData.date = obj.date;
        this.formData.usd = this.personal.usd;
        if (obj.status === 'PROCESSED' && obj.currency === 'CAN') {
            this.valueChange.emit(Step.canexReceipt);

        } else if (obj.status === 'PROCESSED' && obj.currency === 'ETH') {
            this.valueChange.emit(Step.canexProcessing);
        }

        if (!existingActivity && activity.page !== 'logout') {
            this.activities.push(activity);
        }
    }

    cancel() {
        this.formData.email = '';
        // this.valueChange.emit(Step.none);
    }

    submit() {
        this.title = 'TX successful';
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
        this.router.navigate(['./']);
    }
}
