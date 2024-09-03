import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDataComponent } from './add-data/add-data.component';
import { ViewDataComponent } from './view-data/view-data.component';

const routes: Routes = [
  { path: 'add-data', component: AddDataComponent },
  { path: 'view-data', component: ViewDataComponent },
  { path: '', redirectTo: '/add-data', pathMatch: 'full' },
  { path: '**', redirectTo: '/add-data' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
