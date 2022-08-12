import { TestBed } from '@angular/core/testing';

import { ApiCriptoService } from './api-cripto.service';

describe('ApiCriptoService', () => {
  let service: ApiCriptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCriptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
