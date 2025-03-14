import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUnidadePropriaComponent } from './form-unidade-propria.component';
import { MessageService } from 'primeng/api';

describe('FormUnidadePropriaComponent', () => {
  let component: FormUnidadePropriaComponent;
  let fixture: ComponentFixture<FormUnidadePropriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      declarations: [FormUnidadePropriaComponent]
    });
    fixture = TestBed.createComponent(FormUnidadePropriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
