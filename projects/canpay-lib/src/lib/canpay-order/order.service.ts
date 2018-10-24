import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as globals from '../globals';
import { Location } from '@angular/common';

@Injectable()
export class OrderService {
    constructor(private http: HttpClient, private loc: Location) { }

    // it returns order details provided id
    getOrder(id: any): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/order/' + id);
    }
}
