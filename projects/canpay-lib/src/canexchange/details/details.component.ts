import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { DetailsService } from './details.service';
import { FormData } from '../data/formData.model';
declare var require: any;
import * as globals from '../globals';
import { CanYaCoinEthService } from '../../lib/services/canyacoin-eth.service';

const Web3 = require('web3');
declare let window: any;
declare var web3;

@Component({
    selector: 'canyalib-mt-wizard-personal',
    templateUrl: './details.component.html',
    styleUrls: ['../payment/details.component.css']
})

export class DetailsComponent implements OnInit {
    title = 'Enter details.';
    personal: Personal;
    form: any;
    @Input() formData: FormData;
    public web3: any;
    metamask = false;
    message: string;
    @Output() valueChange = new EventEmitter();
    Step: globals.Step;
    error: string;
    web3js: any;
    canyaContract: any;

    constructor(private router: Router, private formDataService: FormDataService, private detailsService: DetailsService,
        private loc: Location, private canYaCoinEthService: CanYaCoinEthService) {
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.metamask = true;
            this.web3 = new Web3(window.web3.currentProvider);
            this.web3.eth.getAccounts((err, accs) => {
                this.personal.address = accs.toString();
                const contract = web3.eth.contract(globals.abi).at('0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0');
                contract.balanceOf(this.personal.address, (error, balance) => {
                    // Get decimals
                    contract.decimals((error, decimals) => {
                        // calculate a balance
                        balance = balance.div(10 ** 6);

                        this.personal.amount = Number(localStorage.getItem('oldamount')) - balance;
                        this.formData.eth = this.personal.amount;
                    });
                });

                this.formData.amount = Number(localStorage.getItem('oldamount'));
                this.detailsService.getData('CAN').subscribe(
                    (data) => {
                        const price = (this.formData.amount * data.data.quotes.USD.price).toFixed(6);
                        this.formData.eth = +price;
                        this.formData.usd = +price;
                        this.personal.usd = +price;
                    }
                );
            });

        } else {
            console.log('No web3? You should consider trying MetaMask!');
            this.metamask = false;
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        this.formData = this.formDataService.getFormData();
        this.personal.currency = null;


    }

    createContractInstance(abi, address) {
        if (!this.web3js) {
            console.log('Error createContractInstance, web3 provider not initialized');
            return;
        }

        return new this.web3js.eth.Contract(abi, address);
    }

    validateAddress(address) {
        const trigger = address,
            regexp = new RegExp('^0x[a-fA-F0-9]{40}$'),
            test = regexp.test(trigger);
    }

    cancel() {
        this.formData.email = '';
        this.valueChange.emit(globals.Step.none);
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        return true;
    }

    goToNext() {
        this.formData.usd = this.personal.usd;
        this.formDataService.setPersonal(this.personal);
        this.valueChange.emit(globals.Step.payment);
    }
}
