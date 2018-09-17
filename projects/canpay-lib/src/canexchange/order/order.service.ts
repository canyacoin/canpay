import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as globals from '../globals';
import { Location } from '@angular/common';

@Injectable()
export class OrderService {
    constructor(private http: HttpClient, private loc: Location) { }

    getOrder(id: any): Observable<any> {
        return this.http.get(globals.rootUrlDev + globals.contextPath + 'api/order/' + id);
    }

    getHostUrl() {
        const angularRoute = this.loc.path();
        const url = window.location.href.replace('4200', '8080');
        return url.replace('/staging', '');
    }
}
