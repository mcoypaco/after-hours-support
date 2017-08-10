import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdDialogModule, MdIconModule, MdInputModule, MdListModule, MdPaginatorModule, MdProgressSpinnerModule, MdToolbarModule, MdTooltipModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { AgentsComponent } from './agents/agents.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { TeamsComponent } from './teams/teams.component';
import { WorkQueuesComponent } from './work-queues/work-queues.component';
import { SettingsComponent } from './settings.component';
import { SettingsService } from './settings.service';
import { AgentsDataService } from './agents/agents-data.service';
import { CreateAgentDialogComponent } from './agents/create-agent-dialog/create-agent-dialog.component';
import { CreateAgentDialogService } from './agents/create-agent-dialog/create-agent-dialog.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdPaginatorModule,
    MdProgressSpinnerModule,
    MdToolbarModule,
    MdTooltipModule,
    SharedModule,
    SettingsRoutingModule
  ],
  declarations: [AgentsComponent, CampaignsComponent, TeamsComponent, WorkQueuesComponent, SettingsComponent, CreateAgentDialogComponent],
  entryComponents: [CreateAgentDialogComponent],
  providers: [SettingsService, AgentsDataService, CreateAgentDialogService]
})
export class SettingsModule { }
