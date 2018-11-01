import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import * as globals from '../globals';
import { CanexService } from '../services/canex.service';
import { FormData, FormDataService } from '../services/formData.service';

@Component({
    selector: 'canyalib-mt-wizard-complete-details'
    , templateUrl: './complete.component.html',
    styleUrls: ['../canpay-payment-details/payment-details.component.css']
})

export class CompleteDetailsComponent implements OnInit {

    title = 'Booyah! CAN sent.';
    titleSecond = 'Your receipt has been emailed. ';
    @Input() formData: FormData;
    isFormValid = false;
    etherUrl: string;
    message: string;
    orderUrl: string;
    @Output() valueChange = new EventEmitter();

    constructor(private router: Router, private formDataService: FormDataService, private canexService: CanexService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        this.etherUrl = globals.etherscan + this.formData.hash;
        this.orderUrl = globals.order + this.formData.key;
        try {
            this.canexService.checkStatus(this.formData.key).subscribe(activity => {
                this.formData.hash = activity.hashEthertoAccount;
            }, (error) => {

            });
        } catch (e) {
        }
        this.canexService.sentMail(this.formData.key).subscribe(activity => {

        });

    }

    cancel() {
        this.formData.email = '';
        // this.valueChange.emit(Step.none);
    }
}
