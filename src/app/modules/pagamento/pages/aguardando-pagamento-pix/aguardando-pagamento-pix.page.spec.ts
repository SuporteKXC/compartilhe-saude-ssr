import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguardandoPagamentoPixPage } from './aguardando-pagamento-pix.page';
import { MessageService } from 'primeng/api';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AguardandoPagamentoPixPage', () => {
  let component: AguardandoPagamentoPixPage;
  let fixture: ComponentFixture<AguardandoPagamentoPixPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AguardandoPagamentoPixPage],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [MessageService],
    });
    fixture = TestBed.createComponent(AguardandoPagamentoPixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
