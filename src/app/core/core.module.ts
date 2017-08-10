import { NgModule } from '@angular/core';
import { MdButtonModule, MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './../shared/shared.module';
import { FormValidationMessageService } from './form-validation-message.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExceptionService } from './exception.service';
import { ExceptionDialogComponent } from './exception-dialog/exception-dialog.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule,
    NoopAnimationsModule,
    SharedModule,
  ],
  declarations: [PageNotFoundComponent, ExceptionDialogComponent],
  entryComponents: [ExceptionDialogComponent],
  providers: [FormValidationMessageService, ExceptionService],
})
export class CoreModule { }
