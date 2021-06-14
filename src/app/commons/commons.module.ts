import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './commons-routing.module';
import { CityComponent } from './city/city.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    CityComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule
  ],
  exports: [
    HomeComponent,
    CityComponent
  ]
})
export class CommonsModule { }
