import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
