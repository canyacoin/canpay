import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormData, Personal } from '../canpay-data/formData.model';
import { FormDataService } from '../canpay-data/formData.service';
import { ResultService } from './result.service';
import { Http, Response } from '@angular/http';
import * as globals from '../../canexchange/globals';
import { interval } from 'rxjs';

declare var require: any;
const Web3 = require('web3');
declare var web3;
declare let window: any;
const gasStationApi = 'https://ethgasstation.info/json/ethgasAPI.json';

@Component({
    selector: 'canyalib-mt-wizard-qr-details'
    , templateUrl: './result.component.html',
    styleUrls: ['../canpay-payment-details/payment-details.component.css']
})

export class ResultDetailsComponent implements OnInit {
    // title = 'Thanks for staying tuned!';
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
    etheriumAddress: string = globals.etheriumAddress;
    metamaskpayment = false;
    tokenABI: any;
    public MyContract: any;
    web3js: any;
    canyaContract: any;
    message: string;
    orderUrl: string;
    dai = false;
    @Output() valueChange = new EventEmitter();

    constructor(protected http: Http, private resultService: ResultService,
        private router: Router, private formDataService: FormDataService, private route: Router) {
        this.tokenABI = globals.abi;

        try {
            const subscription = interval(200 * 60).subscribe(x => {

                this.resultService.checkStatus(this.formData.key).subscribe(activity => {
                    if (activity.status === 'IDENTIFIED') {
                        subscription.unsubscribe();
                        this.valueChange.emit(globals.Step.staging);

                    } else if (activity.status === 'ERROR') {
                        subscription.unsubscribe();
                        this.valueChange.emit(globals.Step.error);
                    }
                },
                    (error) => {

                    });
            });
        } catch (e) {

        }
    }

    createContractInstance(abi, address) {
        if (!this.web3js) {
            console.log('Error createContractInstance, web3 provider not initialized');
            return;
        }

        return new this.web3js.eth.Contract(abi, address);
    }

    amountToCANTokens(amount) {
        return amount * Math.pow(10, this.formData.erc20tokenDecimal);
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

        this.web3.eth.getAccounts((err, accs) => {

            const user_address = accs.toString();

            if (this.formData.currency === 'ETH') {
                window.web3.eth.sendTransaction({
                    to: globals.etheriumAddress,
                    from: user_address,
                    value: window.web3.toWei(this.formData.eth, 'ether'),
                }, function (err, transactionHash) {
                    if (err) {
                        return alert('Oh no!: ' + err.message);
                    }
                });
            } else {
                this.web3js = new Web3(web3.currentProvider);
                this.canyaContract = this.createContractInstance(this.tokenABI, this.formData.erc20token);

                const MyContract = web3.eth.contract(this.tokenABI);
                const myContractInstance = MyContract.at(this.formData.erc20token);

                this.resultService.getGasPrice().subscribe(activity => {

                    myContractInstance.transfer(globals.etheriumAddress, this.amountToCANTokens(this.formData.eth),
                        { from: user_address, gas: activity.fast + '000' });

                });

            }

        });

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
            this.valueChange.emit(globals.Step.complete);
        } else if (obj.status === 'PROCESSED' && obj.currency === 'ETH') {
            this.valueChange.emit(globals.Step.staging);
        } else if (obj.status === 'PROCESSED' && obj.currency === 'METAMASK') {
            this.valueChange.emit(globals.Step.complete);
        }

        if (!existingActivity && activity.page !== 'logout') {
            this.activities.push(activity);
        }
    }

    cancel() {
        this.formData.email = '';
        this.valueChange.emit(globals.Step.none);
    }

    ngOnInit() {

        this.copied = false;
        this.formData = this.formDataService.getFormData();
        this.orderUrl = globals.order + this.formData.key;
        if (this.formData.currency === 'ETH') {
            this.ethStatus = true;
        }

        if (this.formData.currency === 'Dai') {
            this.dai = true;
        }

        this.isFormValid = this.formDataService.isFormValid();
        this.personal = this.formDataService.getPersonal();

        this.resultService.save(this.formData).subscribe(activity => {
        });

    }

}
