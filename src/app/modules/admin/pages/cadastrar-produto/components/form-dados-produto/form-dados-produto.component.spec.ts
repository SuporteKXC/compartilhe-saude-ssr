import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosProdutoComponent } from './form-dados-produto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('FormDadosProdutoComponent', () => {
  let component: FormDadosProdutoComponent;
  let fixture: ComponentFixture<FormDadosProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      imports: [HttpClientTestingModule],
      declarations: [FormDadosProdutoComponent]
    });
    fixture = TestBed.createComponent(FormDadosProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
