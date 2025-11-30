import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';

export const NOTAS_ROUTES: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then(m => m.HomePage),
      },
      {
        path: 'agregar-tarea',
        loadComponent: () =>
          import('../agregar-tarea/agregar-tarea.page').then(m => m.AgregarTareaPage),
      },
      {
        path: 'detalle-tarea/:id',
        loadComponent: () =>
          import('../detalle-tarea/detalle-tarea.page').then(m => m.DetalleTareaPage),
      },
      {
        path: 'editar-tarea/:id',
        loadComponent: () =>
          import('../editar-tarea/editar-tarea.page').then(m => m.EditarTareaPage),
      },
      {
        path: 'api-tareas',
        loadComponent: () =>
          import('../api-tareas/api-tareas.page').then(m => m.ApiTareasPage),
      },
    ],
  },
];
