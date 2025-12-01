import { Routes } from '@angular/router';

import { ViewComponent } from './view.component';

export const viewRoutes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('@/app/view/home/home.component').then((h) => h.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('@/app/view/about/about.component').then((h) => h.AboutComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('@/app/view/contact/contact.component').then((h) => h.ContactComponent),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('@/app/view/product/product.component').then((p) => p.ProductComponent),
      },
      {
        path: 'products/:ProductDetail',
        loadComponent: () =>
          import('@/app/view/product/product-details/product-details.component').then(
            (h) => h.ProductDetailsComponent,
          ),
      },
    ],
  },
];
