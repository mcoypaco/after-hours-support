import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      {
        path:'',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        canLoad: [AuthGuard],
      },
      {
        path:'evaluation',
        loadChildren: 'app/evaluation/evaluation.module#EvaluationModule',
        canLoad: [AuthGuard],
      },
      {
        path:'questionnaires',
        loadChildren: 'app/questionnaire/questionnaire.module#QuestionnaireModule',
        canLoad: [AuthGuard],
      },
      {
        path:'settings',
        loadChildren: 'app/settings/settings.module#SettingsModule',
        canLoad: [AuthGuard],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
