import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { hash } from '../shared/sha1';

import { IRealty } from './realty';

@Injectable()
export class RealtyListingsService {
    // private _listingsUrl = 'app/realty/dummydata.json';
    private _listingsUrl : string = "https://api.booli.se/listings?";
    private _privateKey : string = "LWfD8NBtmLVFnusBZURfhgABvnu3JpvhslQEWNvR";

    constructor(private _http: Http) { }

    getListings(): Observable<IRealty[]> {
        var auth = {
            callerId: "MacL3an",
            time: Math.round(Date.now() / 1000),
            // unique: crypto.randomBytes(Math.ceil(16/2)).toString("hex").slice(0, 16),
            unique: (""+Math.random()).substring(2,18),
            q: "nacka"
            // hash: shasum.update(auth.callerId + auth.time + "YOUR_PRIVATE_KEY" + auth.unique).digest("hex")
            // hash: hash(auth.callerId + auth.time + this._privateKey + auth.unique)           
        };
        auth['hash'] = hash(auth.callerId + auth.time + this._privateKey + auth.unique)
        let url = this._listingsUrl+this.serialize(auth);
        console.log("AUTH");        
        console.log(url)

        return this._http.get(url)
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

    serialize = function(obj) {
        var str = [];
        for(var p in obj)
            if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
}
}