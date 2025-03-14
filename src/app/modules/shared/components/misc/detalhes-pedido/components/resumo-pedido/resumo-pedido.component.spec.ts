import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumoPedidoComponent } from './resumo-pedido.component';
import { FormaPagamento } from 'src/app/modules/pagamento/enums/forma-pagamento';
import { StatusPedido } from 'src/app/modules/pagamento/enums/status-pedido';
import { OAuthService } from 'angular-oauth2-oidc';
import { DialogService } from 'primeng/dynamicdialog';
import { ProdutoLocal } from 'src/app/modules/content/models/produto-local.model';

describe('PedidoComponent', () => {
  let component: ResumoPedidoComponent;
  let fixture: ComponentFixture<ResumoPedidoComponent>;

  const oAuthServiceSpy = {
    getUserInfo: jest.fn(),
    getIdentityClaims: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumoPedidoComponent],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    fixture = TestBed.createComponent(ResumoPedidoComponent);
    component = fixture.componentInstance;

    component.data = {
      id: 100053,
      itens: [
        {
          quantidade: 1,
          nome: 'Pacote de Check-up do Homem',
          descricao:
            'Consulta Urologista + retorno, Hemograma, Lipidograma, Glicose, EAS, Ureia, Creatinina, PSA Total e Livre e Ultrassom de abdome total',
          valorTotal: 523.0,
          localProduto: {
            nomeEstabelecimento: 'Compartilhe Saúde São Mateus',
            endereco: {
              logradouro: 'Rua Coronel Constantino Cunha',
              numero: '2205',
              complemento: null,
              bairro: 'Centro',
              cep: '29934620',
              siglaUf: null,
              cidade: {
                id: 3165,
                nome: 'São Mateus',
                siglaUf: 'ES',
              },
            },
          } as ProdutoLocal,
          pathImagem: '/CHECK-UP+DO+HOMEM.jpg',
        },
      ],
      formaPagamento: FormaPagamento.CARTAO_CREDITO,
      status: StatusPedido.PAGO,
      valorTotal: 523.0,
      valorParcela: 87.17,
      qtdParcelas: 6,
      dataHoraPagamento: '2024-02-21T15:23:58',
      dataHoraInclusao: '2024-02-21T15:23:56',
      nome: 'John Doe',
      cpf: '00000000000',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
