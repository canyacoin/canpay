import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as globals from '../../canexchange/globals';
 import { Location } from '@angular/common';

@Injectable()
export class ResultService {
    constructor(private http: HttpClient, private loc: Location) { }

    save(data: any): Observable<any> {
        return this.http.post(globals.rootUrlDev + globals.contextPath + 'api/saveTransaction', data);
    }

    getHostUrl() {
        const angularRoute = this.loc.path();
        const url = window.location.href.replace('4200', '8080');
        return url.replace(angularRoute, '');
    }

    checkStatus(id: any): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/staging/' + id);
    }

    getGasPrice(): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/getGas');
    }
 
}
