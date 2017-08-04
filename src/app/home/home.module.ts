import { NgModule } from '@angular/core';
import { MdButtonModule, MdListModule, MdMenuModule, MdSidenavModule, MdToolbarModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavService } from './sidenav.service';

@NgModule({
  imports: [
    MdButtonModule,
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, ToolbarComponent, SidenavComponent],
  providers: [SidenavService]
})
export class HomeModule { }
