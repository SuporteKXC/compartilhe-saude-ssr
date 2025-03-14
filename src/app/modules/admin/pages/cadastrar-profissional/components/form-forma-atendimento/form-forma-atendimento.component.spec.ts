import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFormaAtendimentoComponent } from './form-forma-atendimento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('FormFormaAtendimentoComponent', () => {
  let component: FormFormaAtendimentoComponent;
  let fixture: ComponentFixture<FormFormaAtendimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      imports: [HttpClientTestingModule],
      declarations: [FormFormaAtendimentoComponent]
    });
    fixture = TestBed.createComponent(FormFormaAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
