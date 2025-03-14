import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarValoresComponent } from './modal-adicionar-valores.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('ModalAdicionarValoresComponent', () => {
  let component: ModalAdicionarValoresComponent;
  let fixture: ComponentFixture<ModalAdicionarValoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      imports: [HttpClientTestingModule],
      declarations: [ModalAdicionarValoresComponent]
    });
    fixture = TestBed.createComponent(ModalAdicionarValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
