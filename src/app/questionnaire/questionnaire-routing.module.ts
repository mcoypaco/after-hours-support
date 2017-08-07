import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireItemComponent } from './questionnaire-item/questionnaire-item.component';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';

const routes: Routes = [
  { 
    path: '',
    component:QuestionnaireComponent,
    children: [
      {
        path: '',
        component: QuestionnaireListComponent,
      },
      {
        path: ':id',
        component: QuestionnaireItemComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
