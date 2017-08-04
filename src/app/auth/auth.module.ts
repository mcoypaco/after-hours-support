import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { LoginFormService } from './login-form.service';

@NgModule({
  imports: [
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule, 
    MdProgressSpinnerModule,
    SharedModule,
    AuthRoutingModule,
  ],
  declarations: [AuthComponent, LoginComponent],
  providers: [LoginFormService]
})
export class AuthModule { }
