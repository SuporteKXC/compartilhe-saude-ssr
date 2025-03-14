import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnderecoComponent } from './form-endereco.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormEnderecoComponent', () => {
  let component: FormEnderecoComponent;
  let fixture: ComponentFixture<FormEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, ReactiveFormsModule],
      declarations: [FormEnderecoComponent],
      providers: [MessageService],
    });
    fixture = TestBed.createComponent(FormEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
