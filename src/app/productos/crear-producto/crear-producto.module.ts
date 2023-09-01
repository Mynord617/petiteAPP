import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearProductoRoutingModule } from './crear-producto-routing.module';
import { CrearProductoComponent } from './crear-producto.component';


@NgModule({
  declarations: [
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    CrearProductoRoutingModule
  ]
})
export class CrearProductoModule { }
