import { TestBed } from '@angular/core/testing';

import { AuthInterceptoService } from './auth-intercepto.service';

describe('AuthInterceptoService', () => {
  let service: AuthInterceptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterceptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
