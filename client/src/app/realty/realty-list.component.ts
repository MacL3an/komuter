import { Component, OnInit } from '@angular/core';
import { IRealty } from './realty';
import { RealtyListingsService } from './realty-listings.service';
import { GoogleMapsService } from '../shared/google-maps.service';

@Component({
    selector: 'realty-list',
    templateUrl: 'app/realty/realty-list.component.html',
    styleUrls: ['app/realty/realty-list.component.css']
})
export class RealtyListComponent {
    pageTitle: string = "Realty List";
    listings: IRealty[];
    errorMessage: string;

    constructor(private _listingsService: RealtyListingsService, 
                private _durationService: GoogleMapsService) {        
    }

    ngOnInit(): void {
        this._listingsService.getListings()
            .subscribe(
            listings => this.listings = listings,
            error => this.errorMessage = <any>error);
    }
}