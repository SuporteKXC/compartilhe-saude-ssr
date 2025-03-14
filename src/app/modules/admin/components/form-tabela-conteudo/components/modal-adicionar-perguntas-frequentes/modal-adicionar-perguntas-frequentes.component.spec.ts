import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarPerguntasFrequentesComponent } from './modal-adicionar-perguntas-frequentes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModalAdicionarPerguntasFrequentesComponent', () => {
  let component: ModalAdicionarPerguntasFrequentesComponent;
  let fixture: ComponentFixture<ModalAdicionarPerguntasFrequentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ModalAdicionarPerguntasFrequentesComponent]
    });
    fixture = TestBed.createComponent(ModalAdicionarPerguntasFrequentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
