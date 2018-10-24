import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import * as globals from '../globals';

@Injectable()
export class StagingDetailsService {
    constructor(private http: Http, private loc: Location) { }

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
