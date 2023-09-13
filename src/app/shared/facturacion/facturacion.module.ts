import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturacionRoutingModule } from './facturacion-routing.module';
import { FacturacionComponent } from './facturacion.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { TotalComponent } from '../total/total.component';



@NgModule({
    declarations: [
        FacturacionComponent
    ],
    imports: [
        CommonModule,
        FacturacionRoutingModule,
        NavbarComponent,
        TotalComponent
    ]
})
export class FacturacionModule { }
