import { Component } from '@angular/core';
import { RealtyListComponent } from './realty/realty-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [RealtyListComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Komuter';
}