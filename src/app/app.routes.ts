import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'categorias',
    loadComponent: () => import('./pages/categorias/categorias.page').then((m) => m.CategoriasPage),
  },
  {
    path: 'locales',
    loadComponent: () => import('./pages/locales/locales.page').then( m => m.LocalesPage)
  },

  {
    path: 'locales/:id',
    loadComponent: () =>
    import('./pages/locales/locales.page').then(m => m.LocalesPage)
  },

  {
    path: 'productos/:id',
    loadComponent: () =>import('./pages/productos/productos.page').then(m => m.ProductosPage)
  },
  {
    path: 'sucursales/:id',
    loadComponent: () =>
    import('./pages/sucursales/sucursales.page').then(m => m.SucursalesPage)
  },
  {
    path: 'productos/:id',
    loadComponent: () =>
    import('./pages/productos/productos.page').then(m => m.ProductosPage)
  },
  {
    path: 'carrito',
    loadComponent: () => import('./pages/carrito/carrito.page').then(m => m.CarritoPage)
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros.page').then( m => m.NosotrosPage)
  },
  
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros.page').then(m => m.NosotrosPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
  path: 'login',
  loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'principal',
    loadComponent: () => import('./pages/principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'principal',
    loadComponent: () => import('./pages/principal/principal.page').then(m => m.PrincipalPage)
  },
  {
    path: 'seleccionar-direccion',
    loadComponent: () => import('./pages/seleccionar-direccion/seleccionar-direccion.page').then( m => m.SeleccionarDireccionPage)
  },
  {
  path: '',
  redirectTo: 'seleccionar-direccion',
  pathMatch: 'full'
  },
];