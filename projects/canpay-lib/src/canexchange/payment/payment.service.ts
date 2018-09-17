import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as globals from '../globals';
import { Location } from '@angular/common';

@Injectable()
export class PaymentService {
    constructor(private http: HttpClient, private loc: Location) { }

    getData(currency): Observable<any> {
        return this.http.get(globals.bancor + currency);
    }

    getTokens(): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/getTokens');
    }

    getSessionId(): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/getunique');
    }

    getHostUrl() {
        const angularRoute = this.loc.path();
        const url = window.location.href.replace('4200', '8080');
        return url.replace(angularRoute, '');
    }

}
