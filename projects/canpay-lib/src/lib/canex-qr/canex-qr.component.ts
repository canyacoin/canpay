import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

import { Step } from '../canpay-wizard/canpay-wizard.component';
import * as globals from '../globals';
import { CanexService } from '../services/canex.service';
import { CanYaCoinEthService } from '../services/canyacoin-eth.service';
import { FormData, FormDataService, Personal } from '../services/formData.service';

declare var require: any;
const Web3 = require('web3');
declare var web3;
declare let window: any;
const gasStationApi = 'https://ethgasstation.info/json/ethgasAPI.json';

@Component({
    selector: 'canyalib-canex-qr'
    , templateUrl: './canex-qr.component.html',
    styleUrls: ['../canex-payment-options/canex-payment-options.component.css']
})

export class CanexQRComponent implements OnInit {

    title = 'Pay exactly';
    @Input() formData: FormData;
    isFormValid = false;
    activities: any[] = [];
    dataSuccess: any;
    personal: Personal;
    copied: boolean;
    ethStatus = false;
    status: string;
    public web3: any;
    ethereumAddress: string = globals.ethereumAddress;
    metamaskpayment = false;
    tokenABI: any;
    public MyContract: any;
    web3js: any;
    canyaContract: any;
    message: string;
    orderUrl: string;
    @Output() valueChange = new EventEmitter();

    constructor(protected http: Http, private canexService: CanexService,
        private router: Router, private formDataService: FormDataService, private route: Router, private canYaCoinEthService: CanYaCoinEthService) {

        try {
            const subscription = interval(200 * 60).subscribe(x => {
                this.canexService.checkStatus(this.formData.key).subscribe(activity => {
                    if (activity.json().status === 'IDENTIFIED') {
                        subscription.unsubscribe();
                        this.valueChange.emit(Step.staging);

                    } else if (activity.json().status === 'ERROR') {
                        subscription.unsubscribe();
                        this.valueChange.emit(Step.error);
                    }
                },
                    (error) => {

                    });
            });
        } catch (e) {

        }
    }

    ngOnInit() {

        this.copied = false;
        this.formData = this.formDataService.getFormData();
        this.orderUrl = globals.order + this.formData.key;

        this.isFormValid = this.formDataService.isFormValid();
        this.personal = this.formDataService.getPersonal();

        if (this.formData.currency === 'ETH') {
            this.ethStatus = true;
            this.metamaskEnable();
        } else {
            this.canexService.getByAddress(this.formData.erc20token).subscribe(activity => {
                if (activity.json().status === 1) {
                    this.metamaskEnable();
                }
            }, (error) => { });
        }

        this.canexService.save(this.formData).subscribe(activity => {
        });
    }

    submit() {
        alert('Done!');
        this.title = 'TX successful';
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }

    copyToClipboard(element) {
        this.copied = true;

        setTimeout(() => {
            this.copied = false;
        }, 1000);
    }

    metamask() {

        if (typeof window.web3 === 'undefined') {
            alert('You need to install MetaMask to use this feature.  https://metamask.io');
        }
        this.web3 = new Web3(window.web3.currentProvider);

        if (this.formData.currency === 'ETH') {
            this.canYaCoinEthService.payWithEth(this.formData.eth, globals.ethereumAddress);
        } else {
            this.canexService.getGasPrice().subscribe(activity => {
                this.canYaCoinEthService.payWithERC20(this.formData.eth, globals.ethereumAddress, this.formData.erc20token, this.formData.erc20tokenDecimal,
                    activity.json().fast + '000');
            });
        }
    }

    metamaskEnable() {
        this.metamaskpayment = true;
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
        } else if (obj.status === 'PROCESSED' && obj.currency === 'METAMASK') {
            this.valueChange.emit(Step.complete);
        }

        if (!existingActivity && activity.page !== 'logout') {
            this.activities.push(activity);
        }
    }

    cancel() {
        this.formData.email = '';
        this.valueChange.emit(Step.buyCan);
    }


}
