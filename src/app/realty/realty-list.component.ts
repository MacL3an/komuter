import { Component } from '@angular/core';

@Component({
    selector: 'realty-list',
    templateUrl: 'app/realty/realty-list.component.html',
    styleUrls: ['app/realty/realty-list.component.css']
})
export class RealtyListComponent {
    pageTitle: string = "Realty List";
    listings: any[] = [
    {
        "booliId": 1735440,
        "livingArea": 96.5,
        "floor": 2,
        "url": "http://www.booli.se/bostad/lagenhet/kristineberg/hornsbergs+strand+65/1735440",
        "duration": null,
        "rooms": 4,
        "source": {
            "url": "http://www.svenskfast.se/",
            "type": "Broker",
            "name": "Svensk Fastighetsf\u00f6rmedling"
        },
        "location": {
            "position": {
                "latitude": 59.34032757,
                "longitude": 18.00688444
            },
            "region": {
                "municipalityName": "Stockholm",
                "countyName": "Stockholms l\u00e4n"
            },
            "namedAreas": [
                "Kristineberg"
            ],
            "address": {
                "streetAddress": "Hornsbergs Strand 65"
            }
        },
        "published": "2014-09-12 19:41:18",
        "rent": 4385,
        "listPrice": 6950000,
        "objectType": "L\u00e4genhet"
    },
    {
        "booliId": 1735412,
        "livingArea": 94,
        "floor": 2,
        "url": "http://www.booli.se/bostad/lagenhet/kungsholmen/kristinebergsvagen+38/1735412",
        "constructionYear": 1980,
        "duration": null,
        "rooms": 4,
        "source": {
            "url": "http://www.bjurfors.se/",
            "type": "Broker",
            "name": "Bjurfors"
        },
        "location": {
            "position": {
                "latitude": 59.33359,
                "longitude": 18.0131
            },
            "region": {
                "municipalityName": "Stockholm",
                "countyName": "Stockholms l\u00e4n"
            },
            "namedAreas": [
                "Kungsholmen"
            ],
            "address": {
                "streetAddress": "Kristinebergsv\u00e4gen 38"
            }
        },
        "published": "2014-09-12 19:38:43",
        "rent": 4195,
        "listPrice": 5800000,
        "objectType": "L\u00e4genhet"
    }]
}