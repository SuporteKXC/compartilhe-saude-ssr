import { TestBed } from '@angular/core/testing';

import { FormCadastrarPrecoService } from './form-cadastrar-preco.service';
import { FormaAtendimento } from 'src/app/modules/shared/models/parceiro/forma-atendimento.model';
import { MessageService } from 'primeng/api';

describe('FormCadastrarPrecoService', () => {
  let service: FormCadastrarPrecoService;
  const valoresComissao = [
    { vista: null, repasse: null, comissao: 0 },
    { vista: null, repasse: 10, comissao: 0 },
    { vista: 10, repasse: null, comissao: 0 },

    { vista: 0, repasse: 0, comissao: 0 },
    { vista: 0, repasse: 10, comissao: -10 },
    { vista: 10, repasse: 0, comissao: 10 },

    { vista: 10.50, repasse: 10, comissao: 0.50 },
    { vista: 9, repasse: 10, comissao: -1 },
  ];

  const valoresDesconto = [
    { referencia: null, vista: null, desconto: 0 },
    { referencia: null, vista: 10, desconto: 0 },
    { referencia: 10, vista: null, desconto: 0 },

    { referencia: 0, vista: 0, desconto: 0 },
    { referencia: 0, vista: 10, desconto: 0 },
    { referencia: 10, vista: 0, desconto: 0 },

    { referencia: 100, vista: 10, desconto: 90 },
    { referencia: 10, vista: 100, desconto: -900 },
    { referencia: 100, vista: 77.5, desconto: 22 },

  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.inject(FormCadastrarPrecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Quando "formaAtendimento" for "presencial" então "localAtendimento" deve ser obrigatório', () => {
    const mockFormaAtendimento: FormaAtendimento = {
      id: 1,
      descricao: "Presencial",
      teleconsulta: false
    };

    service.formTabelaValores.get('formaAtendimento')?.setValue(mockFormaAtendimento);

    const localAtendimentoErrors = service.formTabelaValores.get('localAtendimento')?.errors;
    expect(localAtendimentoErrors).toEqual({ required: true });
  });

  it('Quando "formaAtendimento" for "null" então "localAtendimento" não deve ser obrigatório', () => {
    service.formTabelaValores.get('formaAtendimento')?.setValue(null);

    const localAtendimentoErrors = service.formTabelaValores.get('localAtendimento')?.errors;
    expect(localAtendimentoErrors).toBeNull();
  });

  valoresComissao.forEach((valor) => {
    it(`Deve calcular comissão para vista ${valor.vista} repasse ${valor.repasse} `, () => {
      service.formTabelaValores.patchValue({
        valorVista: valor.vista,
        valorRepasse: valor.repasse
      });

      const resultado = service.comissao;
      expect(resultado).toBe(valor.comissao);
    });
  });

  valoresDesconto.forEach((valor) => {
    it(`Deve calcular desconto para referencia ${valor.referencia} vista ${valor.vista} `, () => {
      service.formTabelaValores.patchValue({
        valorVista: valor.vista,
        valorReferencia: valor.referencia
      });

      const resultado = service.desconto;
      expect(resultado).toBe(valor.desconto);
    });
  });
});
