import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';

import { Step } from '../canpay-wizard/canpay-wizard.component';
import { CanexService } from '../services/canex.service';
import { FormData, FormDataService, Personal } from '../services/formData.service';

@Component({
    selector: 'canyalib-mt-wizard-staging-details'
    , templateUrl: './staging.component.html',
    styleUrls: ['../canpay-payment-details/payment-details.component.css']
})

export class StagingDetailsComponent implements OnInit {
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

    constructor(private router: Router, private formDataService: FormDataService,
        private canexService: CanexService) {
        const subscription = interval(200 * 60).subscribe(x => {
            try {
                this.canexService.checkStatus(this.formData.key).subscribe(activity => {
                    if (activity.status === 'COMPLETE') {
                        subscription.unsubscribe();
                        this.valueChange.emit(Step.complete);

                    } else if (activity.status === 'ERROR') {
                        subscription.unsubscribe();
                        this.valueChange.emit(Step.error);
                    }
                },
                    (error) => {
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
        this.canexService.sentMailStaging(this.formData.key).subscribe(activity => {

        });

        this.canexService.submitPost(this.formData).subscribe(activity => {

        });

    }

    showActivity(activity: any) {

        const existingActivity = false;
        const obj: any = JSON.parse(activity);

        this.formData.hash = obj.hash;
        this.formData.date = obj.date;
        this.formData.usd = this.personal.usd;
        if (obj.status === 'PROCESSED' && obj.currency === 'CAN') {
            this.valueChange.emit(Step.complete);

        } else if (obj.status === 'PROCESSED' && obj.currency === 'ETH') {
            this.valueChange.emit(Step.staging);
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
