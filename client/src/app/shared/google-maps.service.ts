import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GoogleMapsService {
    // private _listingsUrl = 'app/realty/dummydata.json';
    private _listingsUrl = '/api/duration'

    constructor(private _http: Http) { }

    getListings(): Observable<number> {
        return this._http.get(this._listingsUrl)
            .map((response: Response) => <number>response.json())
            //  .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}