import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import * as globals from '../globals';

@Injectable()
export class CompleteDetailsService {
    constructor(private http: Http, private loc: Location) { }

    // sends mail request
    sentMail(data: any): Observable<any> {
        return this.http.post(globals.rootUrlDev + globals.contextPath + 'api/sendMail', data);
    }

    // it checks the status of tx
    checkStatus(id: any): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/staging/' + id);
    }
}
