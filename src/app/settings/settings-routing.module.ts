import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { AgentsComponent } from './agents/agents.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { SettingsComponent } from './settings.component';
import { TeamsComponent } from './teams/teams.component';
import { WorkQueuesComponent } from './work-queues/work-queues.component';

const routes: Routes = [
  { 
    path: 'agents',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AgentsComponent,
        canActivateChild: [AuthGuard],
      }
    ]
  },
  { path: 'campaigns', component: CampaignsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'work-queues', component: WorkQueuesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
