import { Component } from '@angular/core';

import { LoginFormService } from '../login-form.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: object;
  busy: boolean = false;

  constructor(private loginForm: LoginFormService, private authService: AuthService) { }

  login() : void {
    const email = this.loginForm.formGroup.get('email').value;
    const password = this.loginForm.formGroup.get('password').value;

    if(this.loginForm.formGroup.valid && !this.busy) {
      this.busy = true;

      this.authService
        .login(email, password)
        .then(resp => { 
          this.busy = false;
          this.authService.intendedRoute();
        })
        .catch(error => {
          this.busy = false;
          this.error = error;
        })
    }
  }
}
