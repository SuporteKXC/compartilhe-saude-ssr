import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMeusDadosComponent } from './form-meus-dados.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FormMeusDadosComponent', () => {
  let component: FormMeusDadosComponent;
  let fixture: ComponentFixture<FormMeusDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FormMeusDadosComponent]
    });
    fixture = TestBed.createComponent(FormMeusDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
