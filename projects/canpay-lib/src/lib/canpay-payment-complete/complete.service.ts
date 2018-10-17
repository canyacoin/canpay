import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as globals from '../globals';
import { Location } from '@angular/common';

@Injectable()
export class CompleteDetailsService {
    constructor(private http: HttpClient, private loc: Location) { }

    // sends mail request
    sentMail(data: any): Observable<any> {
        return this.http.post(globals.rootUrlDev + globals.contextPath + 'api/sendMail', data);
    }

    // it checks the status of tx
    checkStatus(id: any): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/staging/' + id);
    }
}
