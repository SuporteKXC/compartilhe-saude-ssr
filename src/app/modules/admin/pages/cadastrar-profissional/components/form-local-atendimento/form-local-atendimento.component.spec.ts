import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLocalAtendimentoComponent } from './form-local-atendimento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('FormLocalAtendimentoComponent', () => {
  let component: FormLocalAtendimentoComponent;
  let fixture: ComponentFixture<FormLocalAtendimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      imports: [HttpClientTestingModule],
      declarations: [FormLocalAtendimentoComponent]
    });
    fixture = TestBed.createComponent(FormLocalAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
