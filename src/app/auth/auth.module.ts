import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { LoginFormService } from './login-form.service';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
  declarations: [AuthComponent, LoginComponent],
  providers: [LoginFormService]
})
export class AuthModule { }
