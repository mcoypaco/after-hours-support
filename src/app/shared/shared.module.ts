import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    ErrorComponent
  ],
  declarations: [ErrorComponent]
})
export class SharedModule { }
