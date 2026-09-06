import { TestBed } from '@angular/core/testing';

import { BakeryService } from './bakery.service';
import { provideHttpClient } from '@angular/common/http';

describe('BakeryService', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideHttpClient()] }));

  it('should be created', () => {
    const service: BakeryService = TestBed.inject(BakeryService);
    expect(service).toBeTruthy();
  });
});
