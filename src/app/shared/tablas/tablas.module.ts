import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablasRoutingModule } from './tablas-routing.module';
import { TablasComponent } from './tablas.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';


@NgModule({
  declarations: [
    TablasComponent
  ],
  imports: [
    CommonModule,
    TablasRoutingModule,
    NavbarComponent
  ]
})
export class TablasModule { }
