import { TestBed, inject } from '@angular/core/testing';

import { CreateAgentDialogService } from './create-agent-dialog.service';

describe('CreateAgentDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateAgentDialogService]
    });
  });

  it('should be created', inject([CreateAgentDialogService], (service: CreateAgentDialogService) => {
    expect(service).toBeTruthy();
  }));
});
