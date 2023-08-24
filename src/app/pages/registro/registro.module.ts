import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";


@NgModule({
    declarations: [
        RegistroComponent
    ],
    imports: [
        CommonModule,
        RegistroRoutingModule,
        NavbarComponent
    ]
})
export class RegistroModule { }
