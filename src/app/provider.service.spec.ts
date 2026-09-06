import { TestBed } from '@angular/core/testing';

import { ProviderService } from './provider.service';

describe('ProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProviderService = TestBed.inject(ProviderService);
    expect(service).toBeTruthy();
  });
});
