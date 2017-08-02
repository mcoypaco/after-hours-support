import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { FormValidationMessageService } from './form-validation-message.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [PageNotFoundComponent],
  providers: [FormValidationMessageService]
})
export class CoreModule { }
