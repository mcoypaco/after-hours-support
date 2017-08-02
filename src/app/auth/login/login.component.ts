import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginFormService } from '../login-form.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error : object;

  constructor(private loginForm: LoginFormService, private authService: AuthService, private router: Router) { }

  login() : void {
    const email = this.loginForm.formGroup.get('email').value;
    const password = this.loginForm.formGroup.get('password').value;

    if(this.loginForm.formGroup.valid) {
      this.authService
        .login(email, password)
        .then(resp => this.router.navigate(['']))
        .catch(error => this.error = error);
    }
  }
}
