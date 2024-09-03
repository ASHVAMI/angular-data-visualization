import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule if needed
import { NgChartsModule } from 'ng2-charts'; // Import NgChartsModule for Chart.js integration

import { ViewDataComponent } from './view-data.component';

@NgModule({
  declarations: [
    ViewDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Include this if you need form functionalities
    NgChartsModule // Include this for Chart.js functionality
  ],
  exports: [
    ViewDataComponent
  ]
})
export class ViewDataModule { }
