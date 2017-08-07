import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdPaginatorModule, MdToolbarModule } from '@angular/material';

import { SettingsRoutingModule } from './settings-routing.module';
import { AgentsComponent } from './agents/agents.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { TeamsComponent } from './teams/teams.component';
import { WorkQueuesComponent } from './work-queues/work-queues.component';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdPaginatorModule,
    MdToolbarModule,
    SharedModule,
    SettingsRoutingModule
  ],
  declarations: [AgentsComponent, CampaignsComponent, TeamsComponent, WorkQueuesComponent]
})
export class SettingsModule { }
