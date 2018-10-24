import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as globals from '../globals';
import { Location } from '@angular/common';

@Injectable()
export class StagingDetailsService {
    constructor(private http: HttpClient, private loc: Location) { }

    // send staging mail
    sentMail(data: any): Observable<any> {
        return this.http.post(globals.rootUrlDev + globals.contextPath + 'api/sendStagingMail', data);
    }

    // initiate staging call
    submitPost(data: any): Observable<any> {
        return this.http.post(globals.rootUrlDev + globals.contextPath + 'api/staging', data);
    }

    // check tx status
    checkStatus(id: any): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/staging/' + id);
    }

}
