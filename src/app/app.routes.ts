import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'hotel-list', pathMatch: 'full' },
// TODO: CLEAN UP if it's ready:
  {
    path: 'hotel-list',
    loadComponent: () =>
      import('./hotels/infinite-scroll/infinite-scroll.component').then(
        (mod) => mod.InfiniteScrollComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./auth/dashboard/dashboard.component').then((mod) => mod.DashboardComponent),
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./auth/user/user.component').then((mod) => mod.UserComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((mod) => mod.LoginComponent),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./auth/registration/registration.component').then(
        (mod) => mod.RegistrationComponent
      ),
  },
  {
    path: 'listx',
    loadComponent: () =>
      import('./hotels/hotel-list/hotel-list.component').then(
        (mod) => mod.HotelListComponent
      ),
  },
  {
    path: 'hotel-detail/:id',
    loadComponent: () =>
      import('./hotels/hotel-detail/hotel-detail.component').then(
        (mod) => mod.HotelDetailComponent
      ),
  },
];
