import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdPaginatorModule, MdToolbarModule, MdTooltipModule } from '@angular/material';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireItemComponent } from './questionnaire-item/questionnaire-item.component';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdPaginatorModule,
    MdToolbarModule,
    MdTooltipModule,
    SharedModule,
    QuestionnaireRoutingModule
  ],
  declarations: [QuestionnaireItemComponent, QuestionnaireListComponent, QuestionnaireComponent]
})
export class QuestionnaireModule { }
