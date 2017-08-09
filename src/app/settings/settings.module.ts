import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdPaginatorModule, MdToolbarModule, MdTooltipModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { AgentsComponent } from './agents/agents.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { TeamsComponent } from './teams/teams.component';
import { WorkQueuesComponent } from './work-queues/work-queues.component';
import { SettingsComponent } from './settings.component';
import { SettingsService } from './settings.service';
import { AgentsSettingsService } from './agents/agents-settings.service';
import { AgentsDataService } from './agents/agents-data.service';

@NgModule({
  imports: [
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdPaginatorModule,
    MdToolbarModule,
    MdTooltipModule,
    SharedModule,
    SettingsRoutingModule
  ],
  declarations: [AgentsComponent, CampaignsComponent, TeamsComponent, WorkQueuesComponent, SettingsComponent],
  providers: [SettingsService, AgentsSettingsService, AgentsDataService]
})
export class SettingsModule { }
