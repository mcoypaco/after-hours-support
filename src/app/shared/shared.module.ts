import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { ErrorComponent } from './error/error.component';
import { ApiService } from './api.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    MomentModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    MomentModule,
    ErrorComponent
  ],
  declarations: [ErrorComponent],
  providers: [ApiService]
})
export class SharedModule { }
