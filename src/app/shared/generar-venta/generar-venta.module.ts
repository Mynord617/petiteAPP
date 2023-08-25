import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarVentaRoutingModule } from './generar-venta-routing.module';
import { GenerarVentaComponent } from './generar-venta.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";


@NgModule({
    declarations: [
        GenerarVentaComponent
    ],
    imports: [
        CommonModule,
        GenerarVentaRoutingModule,
        NavbarComponent
    ]
})
export class GenerarVentaModule { }
