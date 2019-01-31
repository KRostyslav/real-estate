import { TestBed } from '@angular/core/testing';

import { InterceptService } from './intercept-service.service';

describe('InterceptServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptService = TestBed.get(InterceptService);
    expect(service).toBeTruthy();
  });
});
