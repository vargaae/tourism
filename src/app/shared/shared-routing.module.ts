import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from './services/auth.guard';

const sharedRoutes: Routes = [
  // { path: '', component: OrderDetailsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule],
  providers: [],
  // providers: [AuthGuard],
})
export class SharedRoutingModule {}
