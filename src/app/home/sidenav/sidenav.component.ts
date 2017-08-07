import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { AuthService } from '../../auth/auth.service';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
  @ViewChild('sidenav') sidenav: MdSidenav
  @HostListener('window:resize', ['$event'])
  onResize(event) {
      if (event.target.innerWidth < 500) {
          this.sidenav.close();
      }
      else{
        this.sidenav.open();
      }
  }

  constructor(private sidenavService: SidenavService, private authService: AuthService) { }

  ngOnInit(){
    this.sidenavService.sidenav = this.sidenav;
    // Todo: check user roles and display allowed modules
  }
  
}
