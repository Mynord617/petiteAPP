import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearProductoRoutingModule } from './crear-producto-routing.module';
import { CrearProductoComponent } from './crear-producto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrearProductoRoutingModule
  ]
})
export class CrearProductoModule { }
