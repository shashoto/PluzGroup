import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full',
  },
  {
    path: 'view',
    loadChildren: () => import('@/app/view/view.routes').then((v) => v.viewRoutes),
  },
];
