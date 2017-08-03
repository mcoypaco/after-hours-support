import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdProgressSpinnerModule,
    ReactiveFormsModule,

    ErrorComponent
  ],
  declarations: [ErrorComponent]
})
export class SharedModule { }
