import { TestBed } from '@angular/core/testing';

import { PerguntasService } from './perguntas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PerguntasService', () => {
  let service: PerguntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PerguntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
