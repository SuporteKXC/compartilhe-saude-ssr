import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemCarrinhoComponent } from './card-item-carrinho.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { DialogService } from 'primeng/dynamicdialog';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('CardItemCarrinhoComponent', () => {
  let component: CardItemCarrinhoComponent;
  let fixture: ComponentFixture<CardItemCarrinhoComponent>;

  const oAuthServiceSpy = {
    hasValidAccessToken: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule],
      declarations: [CardItemCarrinhoComponent],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    fixture = TestBed.createComponent(CardItemCarrinhoComponent);
    component = fixture.componentInstance;

    component.carrinhoItem = {
      id: 1,
      idProduto: 2,
      nome: 'nome',
      descricao: 'descricao',
      quantidade: 1,
      localProduto: {
        id: 8,
        idParceiroEstabelecimento: 1,
        valorVista: 2,
        valorReferencia: 4,
        percentualDesconto: 50,
        nomeEstabelecimento: 'Nome 1',
        nomeProfissional: 'Nome 2',
        registroProfissional: '1234',
        idParceiroProfissional: 4,
        especialidadesProfissional: ['Pediatra'],
        formaAtendimento: FormaAtendimentoEnum.PRESENCIAL,
        endereco: {
          logradouro: 'logradouro',
          complemento: 'complemento',
          siglaUf: 'sigla',
          numero: '1',
          bairro: 'bairro',
          cidade: { id: 1, nome: 'nome', siglaUf: 'sigla' },
          cep: 'cep',
        },
      },
      localStorageId: 0,
      pathImagem: 'pathImage',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
