import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      {
        path:'',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        canLoad: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
