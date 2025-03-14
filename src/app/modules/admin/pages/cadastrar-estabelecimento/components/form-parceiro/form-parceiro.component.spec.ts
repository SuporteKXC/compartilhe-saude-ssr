/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParceiroComponent } from './form-parceiro.component';
import { MessageService } from 'primeng/api';

describe('FormParceiroComponent', () => {
  let component: FormParceiroComponent;
  let fixture: ComponentFixture<FormParceiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      declarations: [ FormParceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
