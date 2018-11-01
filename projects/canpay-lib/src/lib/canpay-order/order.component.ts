import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as globals from '../globals';
import { CanexService } from '../services/canex.service';
import { FormData, Personal } from '../services/formData.service';

@Component({
    selector: 'canyalib-mt-wizard-order'
    , templateUrl: './order.component.html',
    styleUrls: ['../canpay-payment-details/payment-details.component.css']
})

export class OrderComponent implements OnInit {
    // title = 'Thanks for staying tuned!';
    title = 'Order Page.';
    titleSecond = 'Your receipt has been emailed. ';
    @Input() formData: FormData;
    isFormValid = false;
    etherUrl: string;
    personal: Personal;
    activities: any[] = [];
    orderid: string;
    orderData: any = '';
    id: string;
    currency: string;

    constructor(private canexService: CanexService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.currency = 'CAN';
        this.canexService.getOrder(this.route.snapshot.params.id).subscribe(activity => {
            this.orderData = activity;
            this.etherUrl = globals.etherscan + this.orderData.hash;
            this.currency = this.orderData.currency;
        },
            (error) => {
            });
    }

    getOrder() {
        this.canexService.getOrder(this.orderid).subscribe(activity => {
            this.orderData = activity;
            this.etherUrl = globals.etherscan + this.orderData.hash;
        },
            (error) => {
            });
    }

    cancel() {
        this.router.navigate(['./']);
    }

    submit() {
        this.title = 'TX successful';
        this.isFormValid = false;
        this.router.navigate(['./']);
    }
}
