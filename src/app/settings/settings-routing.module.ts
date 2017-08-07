import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentsComponent } from './agents/agents.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { TeamsComponent } from './teams/teams.component';
import { WorkQueuesComponent } from './work-queues/work-queues.component';

const routes: Routes = [
  { path: 'agents', component: AgentsComponent },
  { path: 'campaigns', component: CampaignsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'work-queues', component: WorkQueuesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
