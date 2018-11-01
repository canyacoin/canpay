import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import * as globals from '../globals';

@Injectable()
export class CanexService {
    constructor(private http: Http, private loc: Location) { }


    // get list of supported erc20 tokens
    getTokensBancor(): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/bancor');
    }

    // get conversion rates from coin market cap api
    getDataCmc(currency): Observable<any> {
        return this.http.get(globals.cmc + currency);
    }

    // get conversion rates from bancor api
    getData(currency): Observable<any> {
        return this.http.get(globals.bancor + currency);
    }

    // get list of tokes
    getTokens(): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/getTokens');
    }

    // gets current session
    getSessionId(): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/getunique');
    }

    // sends mail request
    sentMail(data: any): Observable<any> {
        return this.http.post(globals.rootUrlDev + globals.contextPath + 'api/sendMail', data);
    }

    // it checks the status of tx
    checkStatus(id: any): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/staging/' + id);
    }

    // save the tx
    save(data: any): Observable<any> {
        return this.http.post(globals.rootUrlDev + globals.contextPath + 'api/saveTransaction', data);
    }

    // it returns order details provided id
    getOrder(id: any): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/order/' + id);
    }


    // get gas price
    getGasPrice(): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/getGas');
    }

    // get token by address
    getByAddress(address: string): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/getbyaddress/' + address);
    }

    // send staging mail
    sentMailStaging(data: any): Observable<any> {
        return this.http.post(globals.rootUrlDev + globals.contextPath + 'api/sendStagingMail', data);
    }

    // initiate staging call
    submitPost(data: any): Observable<any> {
        return this.http.post(globals.rootUrlDev + globals.contextPath + 'api/staging', data);
    }
}
