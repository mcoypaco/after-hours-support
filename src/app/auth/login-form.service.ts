import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { FormValidationMessageService } from '../core/form-validation-message.service';

@Injectable()
export class LoginFormService {

  formGroup: FormGroup;
  passwordsNotMatch: boolean;
  
  errors: object = {
    'email': '',
    'password': '',
  };

  private rules: object = {
    'email' : ['', [
        Validators.required,
        Validators.email,
      ]
    ],
    'password': ['', [
        Validators.required,
      ]
    ],
  }

  private validationMessages: object = {
    'email': {
      'required': 'Email is required.',
      'email': 'Please enter a valid email.',
    },
    'password': {
      'required': 'Password is required.',
    },
  }

  constructor(private form: FormValidationMessageService) { 
    form.rules = this.rules;
    form.errors = this.errors;
    form.validationMessages = this.validationMessages;

    this.form.buildForm();
    this.formGroup = this.form.formGroup;
  }
}
