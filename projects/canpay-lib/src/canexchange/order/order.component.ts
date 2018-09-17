import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormData } from '../data/formData.model';
import { OrderService } from './order.service';
import { Personal } from '../data/formData.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as globals from '../globals';

@Component({
    selector: 'canyalib-mt-wizard-order'
    , templateUrl: './order.component.html',
    styleUrls: ['../payment/details.component.css']
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

    constructor(private orderService: OrderService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.orderService.getOrder(this.route.snapshot.params.id).subscribe(activity => {
            this.orderData = activity;
            this.etherUrl = globals.etherscan + this.orderData.hash;
        },
            (error) => {
            });
    }

    getOrder() {
        this.orderService.getOrder(this.orderid).subscribe(activity => {
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
