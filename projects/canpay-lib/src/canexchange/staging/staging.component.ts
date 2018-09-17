import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormData } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { CompleteService } from '../complete/complete.service';
import { StagingService } from './staging.service';
import { Personal } from '../data/formData.model';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import * as globals from '../globals';
import { CompleteComponent } from '../complete/complete.component';

@Component({
    selector: 'canyalib-mt-wizard-staging'
    , templateUrl: './staging.component.html',
    styleUrls: ['../payment/details.component.css']
})

export class StagingComponent implements OnInit {
    // title = 'Thanks for staying tuned!';
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
        private completeService: CompleteService, private stagingService: StagingService) {
        const subscription = interval(200 * 60).subscribe(x => {
            try {
                this.stagingService.checkStatus(this.formData.key).subscribe(activity => {
                    if (activity.status === 'COMPLETE') {
                        subscription.unsubscribe();
                        this.valueChange.emit(globals.Step.complete);

                    } else if (activity.status === 'ERROR') {
                        subscription.unsubscribe();
                        this.valueChange.emit(globals.Step.error);
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
        this.stagingService.sentMail(this.formData).subscribe(activity => {

        });

        this.stagingService.submitPost(this.formData).subscribe(activity => {

        });

    }

    showActivity(activity: any) {

        const existingActivity = false;
        const obj: any = JSON.parse(activity);

        this.formData.hash = obj.hash;
        this.formData.date = obj.date;
        this.formData.usd = this.personal.usd;
        if (obj.status === 'PROCESSED' && obj.currency === 'CAN') {
            this.valueChange.emit(globals.Step.complete);

        } else if (obj.status === 'PROCESSED' && obj.currency === 'ETH') {
            this.valueChange.emit(globals.Step.staging);
        }

        if (!existingActivity && activity.page !== 'logout') {
            this.activities.push(activity);
        }
    }

    cancel() {
        this.formData.email = '';
        this.valueChange.emit(globals.Step.none);
    }

    submit() {
        this.title = 'TX successful';
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
        this.router.navigate(['./']);
    }
}
