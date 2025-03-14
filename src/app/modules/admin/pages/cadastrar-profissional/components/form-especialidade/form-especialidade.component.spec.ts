import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEspecialidadeComponent } from './form-especialidade.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('FormEspecialidadeComponent', () => {
  let component: FormEspecialidadeComponent;
  let fixture: ComponentFixture<FormEspecialidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      imports: [HttpClientTestingModule],
      declarations: [FormEspecialidadeComponent]
    });
    fixture = TestBed.createComponent(FormEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
