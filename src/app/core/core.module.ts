import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './../shared/shared.module';
import { FormValidationMessageService } from './form-validation-message.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    SharedModule,
  ],
  declarations: [PageNotFoundComponent],
  providers: [FormValidationMessageService]
})
export class CoreModule { }
