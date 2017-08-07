import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnairesListComponent } from './questionnaires-list/questionnaires-list.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionnaireRoutingModule
  ],
  declarations: [QuestionnairesListComponent]
})
export class QuestionnaireModule { }
