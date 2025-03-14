import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoPerguntasFrequentesComponent } from './secao-perguntas-frequentes.component';

describe('SecaoPerguntasFrequentesComponent', () => {
  let component: SecaoPerguntasFrequentesComponent;
  let fixture: ComponentFixture<SecaoPerguntasFrequentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoPerguntasFrequentesComponent]
    });
    fixture = TestBed.createComponent(SecaoPerguntasFrequentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
