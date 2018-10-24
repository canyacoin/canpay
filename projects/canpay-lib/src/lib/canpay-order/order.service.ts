import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import * as globals from '../globals';

@Injectable()
export class OrderService {
    constructor(private http: Http, private loc: Location) { }

    // it returns order details provided id
    getOrder(id: any): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/order/' + id);
    }
}
