import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get<User>(`${environment.apiUrl}/api/user`, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.access_token}`)
      })
      .toPromise()
      .then(data => this.user = data);
  }

  logout() {
    this.authService.logout();
  }

}
