import { TestBed } from '@angular/core/testing';

import { PerfilService } from './perfil.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PerfilService', () => {
  let service: PerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
