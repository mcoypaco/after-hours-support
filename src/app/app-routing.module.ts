import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
    { path:'', loadChildren:'app/home/home.module#HomeModule' },
    { path:'auth', loadChildren:'app/auth/auth.module#AuthModule' },
    { path:'**', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }