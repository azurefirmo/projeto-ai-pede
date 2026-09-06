import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage-angular';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: Storage, useValue: {
      create: () => Promise.resolve(),
      get: () => Promise.resolve(null),
      set: () => Promise.resolve(),
      remove: () => Promise.resolve()
    } }]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.inject(AuthService);
    expect(service).toBeTruthy();
  });
});
