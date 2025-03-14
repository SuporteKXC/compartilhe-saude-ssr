import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProfissionalPage } from './cadastrar-profissional.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';

describe('CadastrarProfissionalPage', () => {
  let component: CadastrarProfissionalPage;
  let fixture: ComponentFixture<CadastrarProfissionalPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MessageService],
      declarations: [CadastrarProfissionalPage]
    });
    fixture = TestBed.createComponent(CadastrarProfissionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
