import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloTooltipComponent } from './titulo-tooltip.component';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';

describe('SecaoTituloComponent', () => {
  let component: TituloTooltipComponent;
  let fixture: ComponentFixture<TituloTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloTooltipComponent]
    });
    fixture = TestBed.createComponent(TituloTooltipComponent);
    component = fixture.componentInstance;

    component.data = {
      descricao: 'A consulta oftalmológica, ou “exame de vista”, como é também conhecida, faz parte da rotina da maioria das pessoas. Nela, além de verificar a visão e a necessidade ou não do uso de óculos, o médico examina as estruturas do olho e mede a pressão ocular.',
      indicacao: '',
      valorParticular: 0,
      valorVista: 0,
      percentualDesconto: 0,
      locais: [],
      produtosInteresse: [],
      ordem: 0,
      id: 0,
      nome: 'Resultados para Exame Eletrocardiograma',
      resumo: '',
      pathImagem: '',
      categoria: CategoriaProduto.CONSULTA,
      subcategoria: {
        id: 0,
        categoria: CategoriaProduto.CONSULTA,
        descricao: ''
      },
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
