import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetalhesProdutoComponent } from './card-detalhes-produto.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('CardDetalhesProdutoComponent', () => {
  let component: CardDetalhesProdutoComponent;
  let fixture: ComponentFixture<CardDetalhesProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CardDetalhesProdutoComponent]
    });
    fixture = TestBed.createComponent(CardDetalhesProdutoComponent);
    component = fixture.componentInstance;

    component.data = {
      id: 1,
      nome: '',
      parceiroEstabelecimento: {
        pathImagem: '',
        nome: '',
        tiposEstabelecimento: [],
        servicos: []
      },
      parceiroProfissional: {
        nome: '',
        rqe: '',
        pathImagem: '',
        registroProfissional: '',
        formaAtendimento: [],
        especialidades: [],
        servicos: []
      },
      cidade: {
        id: 0,
        nome: '',
        siglaUf: '',
      },
      valorVista: 0,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
