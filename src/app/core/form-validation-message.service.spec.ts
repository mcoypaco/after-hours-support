import { TestBed, inject } from '@angular/core/testing';

import { FormValidationMessageService } from './form-validation-message.service';

describe('FormValidationMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormValidationMessageService]
    });
  });

  it('should be created', inject([FormValidationMessageService], (service: FormValidationMessageService) => {
    expect(service).toBeTruthy();
  }));
});
