import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnairesListComponent } from './questionnaires-list/questionnaires-list.component';

const routes: Routes = [
  { path: '', component:QuestionnairesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
