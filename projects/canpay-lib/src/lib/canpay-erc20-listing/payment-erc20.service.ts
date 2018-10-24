import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import * as globals from '../globals';

@Injectable()
export class PaymentDetailsServiceERC {
    constructor(private http: Http, private loc: Location) { }

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
