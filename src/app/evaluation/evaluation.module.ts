import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';

@NgModule({
  imports: [
    SharedModule,
    EvaluationRoutingModule
  ],
  declarations: [EvaluationFormComponent]
})
export class EvaluationModule { }
