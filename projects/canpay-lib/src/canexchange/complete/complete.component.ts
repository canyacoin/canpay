import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormData } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { CompleteService } from '../complete/complete.service';
import * as globals from '../globals';

@Component({
    selector: 'canyalib-mt-wizard-complete'
    , templateUrl: './complete.component.html',
    styleUrls: ['../payment/details.component.css']
})

export class CompleteComponent implements OnInit {
    // title = 'Thanks for staying tuned!';
    title = 'Booyah! CAN sent.';
    titleSecond = 'Your receipt has been emailed. ';
    @Input() formData: FormData;
    isFormValid = false;
    etherUrl: string;
    message: string;
    orderUrl: string;
    @Output() valueChange = new EventEmitter();

    constructor(private router: Router, private formDataService: FormDataService, private completeService: CompleteService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        this.etherUrl = globals.etherscan + this.formData.hash;
        this.orderUrl = globals.order + this.formData.key;
        try {
            this.completeService.checkStatus(this.formData.key).subscribe(activity => {
                this.formData.hash = activity.hashEthertoAccount;
            },
                (error) => {

                });
        } catch (e) {
        }
        this.completeService.sentMail(this.formData).subscribe(activity => {

        });

    }

    cancel() {
        this.formData.email = '';
        this.valueChange.emit(globals.Step.none);
    }
}
