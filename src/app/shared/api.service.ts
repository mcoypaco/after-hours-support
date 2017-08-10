import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  // Todo: always check token every request
  headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.access_token}`)

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any>  {
    return this.http.get(`${environment.apiUrl}/api/${url}`, {
      headers: this.headers
    });
  }

  post(url: string, body?:object): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/${url}`, body, {
      headers: this.headers
    });
  }

  put(url: string, body?:object): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/${url}`, body, {
      headers: this.headers
    });
  }

  delete(url): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/${url}`, {
      headers: this.headers
    });
  }
}
