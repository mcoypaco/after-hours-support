import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdPaginatorModule, MdRadioModule, MdToolbarModule, MdTooltipModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdPaginatorModule,
    MdRadioModule,
    MdToolbarModule,
    MdTooltipModule,
    SharedModule,
    EvaluationRoutingModule
  ],
  declarations: [EvaluationFormComponent]
})
export class EvaluationModule { }
