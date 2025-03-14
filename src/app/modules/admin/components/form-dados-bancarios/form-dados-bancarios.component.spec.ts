import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosBancariosComponent } from './form-dados-bancarios.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormDadosBancariosComponent', () => {
  let component: FormDadosBancariosComponent;
  let fixture: ComponentFixture<FormDadosBancariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FormDadosBancariosComponent],
    });
    fixture = TestBed.createComponent(FormDadosBancariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
