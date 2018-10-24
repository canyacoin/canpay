import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as globals from '../globals';
import { Location } from '@angular/common';

@Injectable()
export class PaymentDetailsServiceERC {
    constructor(private http: HttpClient, private loc: Location) { }

    // get selected erc20 token data
    getData(currency): Observable<any> {
        return this.http.get(globals.bancor + currency);
    }

    // get list of supported erc20 tokens
    getTokens(): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/bancor');
    }

    // get tx status
    getSessionId(): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/getunique');
    }

}
