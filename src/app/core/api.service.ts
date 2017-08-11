import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  setHeaders() : void {
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.access_token}`);
  }

  get(url: string): Observable<any>  {
    this.setHeaders();
    return this.http.get(`${environment.apiUrl}/api/${url}`, {
      headers: this.headers
    });
  }

  post(url: string, body?:object): Observable<any> {
    this.setHeaders();
    return this.http.post(`${environment.apiUrl}/api/${url}`, body, {
      headers: this.headers
    });
  }

  put(url: string, body?:object): Observable<any> {
    this.setHeaders();
    return this.http.put(`${environment.apiUrl}/api/${url}`, body, {
      headers: this.headers
    });
  }

  delete(url): Observable<any> {
    this.setHeaders();
    return this.http.delete(`${environment.apiUrl}/api/${url}`, {
      headers: this.headers
    });
  }
}
