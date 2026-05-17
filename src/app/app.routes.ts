import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'seleccionar-direccion',
    pathMatch: 'full'
  },
  {
    path: 'seleccionar-direccion',
    loadComponent: () =>
      import('./pages/seleccionar-direccion/seleccionar-direccion.page')
        .then(m => m.SeleccionarDireccionPage)
  },
  {
    path: 'principal',
    loadComponent: () =>
      import('./pages/principal/principal.page')
        .then(m => m.PrincipalPage)
  },
  {
    path: 'categorias',
    loadComponent: () =>
      import('./pages/categorias/categorias.page')
        .then(m => m.CategoriasPage)
  },
  {
    path: 'locales',
    loadComponent: () =>
      import('./pages/locales/locales.page')
        .then(m => m.LocalesPage)
  },
  {
    path: 'locales/:id',
    loadComponent: () =>
      import('./pages/locales/locales.page')
        .then(m => m.LocalesPage)
  },
  {
    path: 'sucursales/:id',
    loadComponent: () =>
      import('./pages/sucursales/sucursales.page')
        .then(m => m.SucursalesPage)
  },
  {
    path: 'productos/:id',
    loadComponent: () =>
      import('./pages/productos/productos.page')
        .then(m => m.ProductosPage)
  },
  {
    path: 'carrito',
    loadComponent: () =>
      import('./pages/carrito/carrito.page')
        .then(m => m.CarritoPage)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page')
        .then(m => m.LoginPage)
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/nosotros/nosotros.page')
        .then(m => m.NosotrosPage)
  }
];