import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { 
      path:'',
      loadChildren:'app/home/home.module#HomeModule', 
      canLoad:[AuthGuard],
      canActivate:[AuthGuard],
    },
    { 
      path:'**', 
      component:PageNotFoundComponent 
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }