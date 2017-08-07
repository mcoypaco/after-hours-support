import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';

const routes: Routes = [
  { path:'', component:EvaluationFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }
