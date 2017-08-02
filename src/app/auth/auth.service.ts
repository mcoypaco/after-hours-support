import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Token } from './token';
import { environment } from '../../environments/environment';

const { client_id, client_secret } = environment.passwordGrant;

@Injectable()
export class AuthService {
  isLoggedIn() : boolean {
    return localStorage.access_token ? true : false;
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) { }

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
          localStorage.setItem('access_token', data.access_token)
          return true;
        }
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.error);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
