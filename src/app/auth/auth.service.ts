import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Token } from './token';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

const { client_id, client_secret } = environment.passwordGrant;

@Injectable()
export class AuthService {
  user : User = JSON.parse(localStorage.getItem('user'));
  
  // store the URL so we can redirect after logging in
  redirectUrl: string = '/';

  constructor(private http: HttpClient, private router: Router) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.error);
  }

  checkUser() : Promise<void> {
    return this.http
      .get<User>(`${environment.apiUrl}/api/user`, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.access_token}`)
      })
      .toPromise()
      .then(data => {
        this.user = data;
        localStorage.setItem('user', JSON.stringify(data));
      })
  }
  
  intendedRoute() : void {
    this.router.navigate([this.redirectUrl]);
  }

  isLoggedIn() : boolean {
    return localStorage.access_token ? true : false;
  }

  login(username: string, password: string) : Promise<boolean> {
    const body = {
      grant_type: 'password',
      client_id,
      client_secret,
      username,
      password
    }

    return this.http
      .post<Token>(`${environment.apiUrl}/oauth/token`, body)
      .toPromise()
      .then(data => {
          localStorage.setItem('access_token', data.access_token);
          return true;
        }
      )
      .then(() => {
        return this.checkUser();
      })
      .catch(this.handleError);
  }
    
  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
