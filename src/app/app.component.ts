import { Component, ViewChild } from '@angular/core';
import { AddDataComponent } from './add-data/add-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(AddDataComponent) addDataComponent!: AddDataComponent;
}
