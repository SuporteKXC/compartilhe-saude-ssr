import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoDestaqueBeneficiosComponent } from './secao-destaque-beneficios.component';

describe('SecaoDestaqueBeneficiosComponent', () => {
  let component: SecaoDestaqueBeneficiosComponent;
  let fixture: ComponentFixture<SecaoDestaqueBeneficiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoDestaqueBeneficiosComponent]
    });
    fixture = TestBed.createComponent(SecaoDestaqueBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
