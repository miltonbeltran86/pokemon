import { TestBed } from '@angular/core/testing';

import { UthGuardService } from './uth-guard.service';

describe('UthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UthGuardService = TestBed.get(UthGuardService);
    expect(service).toBeTruthy();
  });
});
