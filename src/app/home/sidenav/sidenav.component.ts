import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
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

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(){
    this.sidenavService.sidenav = this.sidenav;
    
  }

}
