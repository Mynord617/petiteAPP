import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/guards/auth.guard';
import { usuarioLogueadoGuard } from './services/guards/usuario-logueado.guard';
import { NosotrosComponent } from './examples/nosotros/nosotros.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registro',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/registro/registro.module').then((m) => m.RegistroModule),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./shared/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'graficas',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./shared/graficas/graficas.module').then((m) => m.GraficasModule),
  },
  {
    path: 'tablas',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./shared/tablas/tablas.module').then((m) => m.TablasModule),
  },
  {
    path: 'generarVenta',
    canActivate: [usuarioLogueadoGuard],
    loadChildren: () =>
      import('./shared/generar-venta/generar-venta.module').then(
        (m) => m.GenerarVentaModule
      ),
  },
  {
    path: 'facturacion',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./shared/facturacion/facturacion.module').then(
        (m) => m.FacturacionModule
      ),
  },
  {
    path: 'crear-producto',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./productos/crear-producto/crear-producto.module').then(
        (m) => m.CrearProductoModule
      ),
  },
  {
    path: 'lista-producto',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./productos/lista-productos/lista-productos.module').then(
        (m) => m.ListaProductosModule
      ),
  },
  { path: 'nosotros',
    canActivate: [authGuard],
   component: NosotrosComponent 
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
