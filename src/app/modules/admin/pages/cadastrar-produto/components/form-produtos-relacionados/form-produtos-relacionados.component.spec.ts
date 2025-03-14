import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProdutosRelacionadosComponent } from './form-produtos-relacionados.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('FormProdutosRelacionadosComponent', () => {
  let component: FormProdutosRelacionadosComponent;
  let fixture: ComponentFixture<FormProdutosRelacionadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      declarations: [FormProdutosRelacionadosComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(FormProdutosRelacionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
