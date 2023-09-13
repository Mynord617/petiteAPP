import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { GraficasComponent } from './graficas.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
    declarations: [
        GraficasComponent
    ],
    imports: [
        CommonModule,
        GraficasRoutingModule,
        NavbarComponent,
        NgApexchartsModule
    ]
})
export class GraficasModule { }
