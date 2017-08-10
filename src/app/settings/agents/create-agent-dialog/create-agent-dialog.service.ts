import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { FormValidationMessage } from '../../../core/form-validation-message';
import { FormValidationMessageService } from '../../../core/form-validation-message.service';

@Injectable()
export class CreateAgentDialogService implements FormValidationMessage {
  formGroup: FormGroup;

  errors: object = {
    'employeeNumber': '',
    'name': '',
  };

  rules: object = {
    'employeeNumber' : ['', [
        Validators.required,
      ]
    ],
    'name': ['', [
        Validators.required,
      ]
    ],
  }

  validationMessages: object = {
    'employeeNumber': {
      'required': 'Employee number is required.',
    },
    'name': {
      'required': 'Name is required.',
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
