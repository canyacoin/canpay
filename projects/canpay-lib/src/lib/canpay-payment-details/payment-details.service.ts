import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as globals from '../globals';
import { Location } from '@angular/common';

@Injectable()
export class PaymentDetailsService {
    constructor(private http: HttpClient, private loc: Location) { }

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
