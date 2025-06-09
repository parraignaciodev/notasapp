import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'agregar-tarea',
    loadComponent: () => import('./agregar-tarea/agregar-tarea.page').then( m => m.AgregarTareaPage)
  },
  {
    path: 'detalle-tarea/:id',
    loadComponent: () => import('./detalle-tarea/detalle-tarea.page').then( m => m.DetalleTareaPage)
  },
  {
    path: 'editar-tarea/:id',
    loadComponent: () => import('./editar-tarea/editar-tarea.page').then( m => m.EditarTareaPage)
  },
];
