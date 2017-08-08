import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdPaginatorModule, MdTableModule, MdToolbarModule, MdTooltipModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule, 
    MdIconModule, 
    MdInputModule, 
    MdListModule, 
    MdPaginatorModule, 
    MdTableModule,
    MdToolbarModule, 
    MdTooltipModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
