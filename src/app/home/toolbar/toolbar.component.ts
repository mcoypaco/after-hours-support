import { Component, OnInit } from '@angular/core';

import { SidenavService } from '../sidenav.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user : string;
  
  constructor(private sidenavService:SidenavService, private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.user.name;
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  logout() {
    this.authService.logout();
  }
}
