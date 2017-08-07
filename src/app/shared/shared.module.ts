import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';

import { ErrorComponent } from './error/error.component';

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
    ErrorComponent
  ],
  declarations: [ErrorComponent]
})
export class SharedModule { }
