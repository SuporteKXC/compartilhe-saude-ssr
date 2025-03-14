import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConteudoComponent } from './form-conteudo.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

describe('FormConteudoComponent', () => {
  let component: FormConteudoComponent;
  let fixture: ComponentFixture<FormConteudoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogService, MessageService],
      declarations: [FormConteudoComponent]
    });
    fixture = TestBed.createComponent(FormConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
