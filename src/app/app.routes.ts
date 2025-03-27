import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'hotels', pathMatch: 'full' },
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
    path: 'hotels',
    loadComponent: () =>
      import('./hotels/hotel-list/hotel-list.component').then(
        (mod) => mod.HotelListComponent
      ),
  },
  {
    path: 'create-hotel',
    loadComponent: () =>
      import('./hotels/create-hotel/create-hotel.component').then(
        (mod) => mod.CreateHotelComponent
      ),
  },
];
