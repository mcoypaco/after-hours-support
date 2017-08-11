import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { FormValidationMessage } from '../../../core/form-validation-message';
import { FormValidationMessageService } from '../../../core/form-validation-message.service';

@Injectable()
export class CreateAgentDialogService implements FormValidationMessage {
  formGroup: FormGroup;
  private transactionSource = new Subject<any>();

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
        Validators.pattern('^[^0-9]+$')
      ]
    ],
  }

  validationMessages: object = {
    'employeeNumber': {
      'required': 'Employee number is required.',
    },
    'name': {
      'required': 'Name is required.',
      'pattern': 'Name cannot contain numbers'
    },
  }

  constructor(private form: FormValidationMessageService) { 
    form.rules = this.rules;
    form.errors = this.errors;
    form.validationMessages = this.validationMessages;

    this.form.buildForm();
    this.formGroup = this.form.formGroup;
  }

  transactionComplete(): void {
    this.transactionSource.next();
  }

  pendingTransaction(): Observable<void> {
    return this.transactionSource.asObservable();
  }
}
