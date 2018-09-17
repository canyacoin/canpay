import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as globals from '../globals';

@Injectable()
export class DetailsService {

    constructor(private http: HttpClient) { }

    getData(currency): Observable<any> {
        return this.http.get(globals.cmc + currency);
    }
}
