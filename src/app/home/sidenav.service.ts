import { Injectable } from '@angular/core';
import { MdSidenav } from "@angular/material";

@Injectable()
export class SidenavService {

  sidenav: MdSidenav;

  toggle() {
    this.sidenav.toggle();
  }
}
