import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { 
    path: 'login',
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:'',
        component: LoginComponent ,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService,
  ]
})
export class AuthRoutingModule { }
