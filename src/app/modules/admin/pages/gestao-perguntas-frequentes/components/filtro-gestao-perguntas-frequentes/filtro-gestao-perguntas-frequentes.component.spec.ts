import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroGestaoPerguntasFrequentesComponent } from './filtro-gestao-perguntas-frequentes.component';

describe('FiltroGestaoPerguntasFrequentesComponent', () => {
  let component: FiltroGestaoPerguntasFrequentesComponent;
  let fixture: ComponentFixture<FiltroGestaoPerguntasFrequentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroGestaoPerguntasFrequentesComponent]
    });
    fixture = TestBed.createComponent(FiltroGestaoPerguntasFrequentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
