import { FormGroup } from '@angular/forms';

export interface FormValidationMessage {
    formGroup: FormGroup;
    errors: object;
    rules: object;
    validationMessages: object;
}
