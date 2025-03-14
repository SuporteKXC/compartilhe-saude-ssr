import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSenhaComponent } from './formulario-senha.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormularioSenhaComponent', () => {
  let component: FormularioSenhaComponent;
  let fixture: ComponentFixture<FormularioSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule, 
        ReactiveFormsModule, 
        HttpClientTestingModule
      ],
      declarations: [FormularioSenhaComponent]
    });
    fixture = TestBed.createComponent(FormularioSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
