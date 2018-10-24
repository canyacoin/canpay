import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import * as globals from '../globals';

@Injectable()
export class PaymentDetailsService {
    constructor(private http: Http, private loc: Location) { }

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

}
