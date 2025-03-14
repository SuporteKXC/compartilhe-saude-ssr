import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPerguntasFrequentesComponent } from './modal-perguntas-frequentes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModalPerguntasFrequentesComponent', () => {
  let component: ModalPerguntasFrequentesComponent;
  let fixture: ComponentFixture<ModalPerguntasFrequentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ModalPerguntasFrequentesComponent]
    });
    fixture = TestBed.createComponent(ModalPerguntasFrequentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
