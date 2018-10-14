import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Personal } from '../canpay-data/formData.model';
import { FormDataService } from '../canpay-data/formData.service';
import { FormData } from '../canpay-data/formData.model';
import * as globals from '../globals';

@Component({
    selector: 'canyalib-mt-wizard-error',
    templateUrl: './error.component.html',
    styleUrls: ['../canpay-payment-details/payment-details.component.css']
})

export class ErrorComponent implements OnInit {
    title = 'Enter details.';
    personal: Personal;
    form: any;
    @Input() formData: FormData;
    public web3: any;
    metamask = false;
    message: string;
    @Output() valueChange = new EventEmitter();

    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        this.formData = this.formDataService.getFormData();
        this.personal.currency = null;
    }

    cancel() {
        this.formData.email = '';
        //this.valueChange.emit(Step.none);
    }

}
