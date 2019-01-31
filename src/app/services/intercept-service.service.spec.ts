import { TestBed } from '@angular/core/testing';

import { InterceptServiceService } from './intercept-service.service';

describe('InterceptServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptServiceService = TestBed.get(InterceptServiceService);
    expect(service).toBeTruthy();
  });
});
