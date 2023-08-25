import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarVentaComponent } from './generar-venta.component';

const routes: Routes = [{ path: '', component: GenerarVentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerarVentaRoutingModule { }
