import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { RealtyListComponent } from './realty/realty-list.component';
import { RealtyListingsService } from './realty/realty-listings.service';
import { GoogleMapsService } from './shared/google-maps.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [RealtyListComponent],
  styleUrls: ['app.component.css'],
  providers: [RealtyListingsService, GoogleMapsService, HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'Komuter';
}