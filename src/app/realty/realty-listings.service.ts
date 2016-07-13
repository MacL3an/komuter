import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IRealty } from './realty';

@Injectable()
export class RealtyListingsService {
    private _listingsUrl = 'app/realty/dummydata.json';

    constructor(private _http: Http) { }

    getListings(): Observable<IRealty[]> {
        return this._http.get(this._listingsUrl)
            .map((response: Response) => <IRealty[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}