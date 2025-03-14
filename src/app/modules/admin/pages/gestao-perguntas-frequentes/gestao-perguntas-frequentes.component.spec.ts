import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoPerguntasFrequentesComponent } from './gestao-perguntas-frequentes.component';

describe('GestaoPerguntasFrequentesComponent', () => {
  let component: GestaoPerguntasFrequentesComponent;
  let fixture: ComponentFixture<GestaoPerguntasFrequentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestaoPerguntasFrequentesComponent]
    });
    fixture = TestBed.createComponent(GestaoPerguntasFrequentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
