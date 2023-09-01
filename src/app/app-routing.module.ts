import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
{ path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroModule) },
{ path: 'dashboard', loadChildren: () => import('./shared/dashboard/dashboard.module').then(m => m.DashboardModule) },
{ path: 'graficas', loadChildren: () => import('./shared/graficas/graficas.module').then(m => m.GraficasModule) },
{ path: 'tablas', loadChildren: () => import('./shared/tablas/tablas.module').then(m => m.TablasModule) },
{ path: 'generarVenta', loadChildren: () => import('./shared/generar-venta/generar-venta.module').then(m => m.GenerarVentaModule) },
{ path: 'facturacion', loadChildren: () => import('./shared/facturacion/facturacion.module').then(m => m.FacturacionModule) },
{ path: 'crear-producto', loadChildren: () => import('./productos/crear-producto/crear-producto.module').then(m => m.CrearProductoModule) },

{ path: 'lista-productos', loadChildren: () => import('./productos/lista-productos/lista-productos.module').then(m => m.ListaProductosModule) },
{ path:'**',pathMatch:'full',redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

