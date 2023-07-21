import { TestBed } from '@angular/core/testing';

import { GhostServiceService } from './ghost-service.service';

describe('GhostServiceService', () => {
  let service: GhostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
