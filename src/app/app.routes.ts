import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // Auth (login / register) - lazy
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
  },

  // Notas (home + CRUD) - lazy + guard
  {
    path: '',
    loadChildren: () =>
      import('./notas/notas.routes').then(m => m.NOTAS_ROUTES),
  },

  // Página 404
  {
    path: 'not-found',
    loadComponent: () =>
      import('./not-found/not-found.page').then(m => m.NotFoundPage),
  },

  // Cualquier ruta inexistente → 404
  {
    path: '**',
    redirectTo: 'not-found',
  },
  {
    path: 'api-tareas',
    loadComponent: () => import('./api-tareas/api-tareas.page').then( m => m.ApiTareasPage)
  },
];

