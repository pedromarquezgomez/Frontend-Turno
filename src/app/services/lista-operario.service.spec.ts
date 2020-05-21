import { TestBed } from '@angular/core/testing';

import { ListaOperarioService } from './lista-operario.service';

describe('ListaOperarioService', () => {
  let service: ListaOperarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaOperarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
