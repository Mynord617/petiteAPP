import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        RegistroComponent
    ],
    imports: [
        CommonModule,
        RegistroRoutingModule,
        NavbarComponent,
        ReactiveFormsModule
    ]
})
export class RegistroModule { }
