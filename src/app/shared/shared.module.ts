import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';

import { ErrorComponent } from './error/error.component';
import { InputErrorComponent } from './input-error/input-error.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MomentModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MomentModule,
    ErrorComponent,
    InputErrorComponent,
  ],
  declarations: [ErrorComponent, InputErrorComponent],
})
export class SharedModule { }
