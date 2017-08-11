import { NgModule } from '@angular/core';
import { MdButtonModule, MdDialogModule, MdSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './../shared/shared.module';
import { FormValidationMessageService } from './form-validation-message.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExceptionService } from './exception.service';
import { ExceptionDialogComponent } from './exception-dialog/exception-dialog.component';
import { ApiService } from './api.service';
import { PushNotificationService } from './push-notification.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MdButtonModule,
    MdDialogModule,
    MdSnackBarModule,
    NoopAnimationsModule,
    SharedModule,
  ],
  declarations: [PageNotFoundComponent, ExceptionDialogComponent],
  entryComponents: [ExceptionDialogComponent],
  providers: [FormValidationMessageService, ExceptionService, ApiService, PushNotificationService],
})
export class CoreModule { }
