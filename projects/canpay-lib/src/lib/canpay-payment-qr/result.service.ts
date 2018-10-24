import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import * as globals from '../globals';

@Injectable()
export class ResultService {
    constructor(private http: Http, private loc: Location) { }

    // save the tx
    save(data: any): Observable<any> {
        return this.http.post(globals.rootUrlDev + globals.contextPath + 'api/saveTransaction', data);
    }

    // check status of tx
    checkStatus(id: any): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/staging/' + id);
    }

    // get gas price
    getGasPrice(): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/getGas');
    }

    // get token by address
    getByAddress(address: string): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/getbyaddress/' + address);
    }

}
