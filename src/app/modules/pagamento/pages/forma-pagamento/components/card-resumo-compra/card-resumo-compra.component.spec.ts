import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResumoCompraComponent } from './card-resumo-compra.component';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('CardResumoCompraComponent', () => {
  let component: CardResumoCompraComponent;
  let fixture: ComponentFixture<CardResumoCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CardResumoCompraComponent],
    });
    fixture = TestBed.createComponent(CardResumoCompraComponent);
    component = fixture.componentInstance;

    component.data = {
      id: 1,
      idProduto: 2,
      nome: 'nome',
      descricao: 'descricao',
      quantidade: 1,
      localProduto: {
        id:8,
        idParceiroEstabelecimento: 10,
        nomeEstabelecimento: 'Nome 1',
        valorVista: 2,
        valorReferencia: 4,
        percentualDesconto: 50,
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
