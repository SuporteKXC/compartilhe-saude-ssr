import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosPessoaisComponent } from './form-dados-pessoais.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('FormDadosPessoaisComponent', () => {
  let component: FormDadosPessoaisComponent;
  let fixture: ComponentFixture<FormDadosPessoaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule],
      declarations: [FormDadosPessoaisComponent],
      providers: [MessageService],
    });
    fixture = TestBed.createComponent(FormDadosPessoaisComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
