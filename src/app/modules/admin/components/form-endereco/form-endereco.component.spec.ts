import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnderecoComponent } from './form-endereco.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormEnderecoComponent', () => {
  let component: FormEnderecoComponent;
  let fixture: ComponentFixture<FormEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FormEnderecoComponent],
    });
    fixture = TestBed.createComponent(FormEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
