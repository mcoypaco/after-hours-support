import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class FormValidationMessageService {

  formGroup: FormGroup;
  rules: object;
  errors: object;
  validationMessages: object;

  constructor(private fb: FormBuilder) { }

  buildForm(): void {
    this.formGroup = this.fb.group(this.rules);

    this.formGroup.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.formGroup) { return; }
    const form = this.formGroup;

    for (const field in this.errors) {
      // clear previous error message (if any)
      this.errors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.errors[field] += messages[key] + ' ';
        }
      }
    }
  }

}
