import { TestBed, inject } from '@angular/core/testing';

import { AgentsDataService } from './agents-data.service';

describe('AgentsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgentsDataService]
    });
  });

  it('should be created', inject([AgentsDataService], (service: AgentsDataService) => {
    expect(service).toBeTruthy();
  }));
});
