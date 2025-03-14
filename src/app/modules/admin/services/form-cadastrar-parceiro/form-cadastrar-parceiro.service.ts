import { Injectable } from '@angular/core';
import { AbstractControlOptions, Validators } from '@angular/forms';
import { CEP_PATTERN, DIGITO_PATTERN, TELEFONE_PATTERN, UUID_PATTERN } from 'src/app/modules/shared/constants/patterns';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { Parceiro } from '../../models/parceiro.model';
import { Endereco } from 'src/app/modules/shared/models/endereco/endereco.model';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { ParceiroServico } from '../../../shared/models/parceiro/parceiro-servico.model';
import { CategoriaParceiroEnum } from '../../pages/gestao-parceiros/enums/categoria-parceiro.enum';
import { linkImageValidator, linkRedeSocialValidator } from 'src/app/modules/shared/validators/link-validator/link-validator';
import { FormBaseService } from 'src/app/modules/shared/services/form-base/form-base.service';
import { ModalidadeParceiroEnum } from 'src/app/modules/shared/enums/modalidade-parceiro.enum';
import { TipoContaEnum } from 'src/app/modules/shared/enums/tipo-conta.enum';
import { Convenio } from 'src/app/modules/shared/models/parceiro/convenio.model';
import { FormaPagamento } from 'src/app/modules/pagamento/enums/forma-pagamento';
import { Banco } from 'src/app/modules/shared/models/parceiro/banco.model';
import { PerguntasFrequentes } from 'src/app/modules/shared/models/pergunta-frequente.model';

@Injectable({
  providedIn: 'root',
})
export class FormCadastrarParceiroService extends FormBaseService {

  constructor() {
    super();
  }

  public formEnderecoCadastrarParceiro(required: boolean) {
    return {
      cep: this.fb.control<string | null>('', {
        validators: [
          this.fieldValidationRequired(required),
          Validators.pattern(CEP_PATTERN)
        ].filter((validators: Validators | null) => validators !== null),
      } as AbstractControlOptions),
      logradouro: this.fb.control<string | null>('', {
        validators: [
          this.fieldValidationRequired(required),
          Validators.maxLength(255),
        ].filter((validators: Validators | null) => validators !== null),
      } as AbstractControlOptions),
      numero: this.fb.control<string | null>('', { validators: this.fieldValidationRequired(required) }),
      complemento: this.fb.control<string | null>(''),
      bairro: this.fb.control<string | null>('', { validators: this.fieldValidationRequired(required) }),
      siglaUf: this.fb.control<string | null>('', { validators: this.fieldValidationRequired(required) }),
      cidade: this.fb.control<Cidade | null>(null, { validators: this.fieldValidationRequired(required) }),
    } satisfies Form<Endereco>;
  }

  public getFormBaseCadastrarParceiro(categoria: CategoriaParceiroEnum) {
    const isRequired = CategoriaParceiroEnum.ESTABELECIMENTO == categoria;
    return {
      // SITUAÇÃO
      ativo: this.fb.nonNullable.control(true),
      destaque: this.fb.nonNullable.control(false),

      // UNIDADE PRÓPRIA
      unidadePropria: this.fb.nonNullable.control(false),

      categoria: this.fb.nonNullable.control<CategoriaParceiroEnum>(categoria),

      // DADOS DO ESTABELECIMENTO
      nome: this.fb.nonNullable.control('', {
        validators: [Validators.required, Validators.maxLength(255)],
      }),
      telefone: this.fb.control('', { validators: Validators.pattern(TELEFONE_PATTERN) }),
      email: this.fb.control('', { validators: [Validators.email, Validators.maxLength(255)] }),
      pathImagem: this.fb.control('', { validators: [Validators.maxLength(255), linkImageValidator] }),
      sobre: this.fb.nonNullable.control<string>('', { validators: [Validators.required, Validators.maxLength(1000)] }),
      linkedin: this.fb.nonNullable.control('', { validators: [Validators.maxLength(255), linkRedeSocialValidator] }),
      whatsapp: this.fb.nonNullable.control('', { validators: [Validators.maxLength(255), linkRedeSocialValidator] }),
      instagram: this.fb.nonNullable.control('', { validators: [Validators.maxLength(255), linkRedeSocialValidator] }),

      // ENDEREÇO
      endereco: this.fb.group(this.formEnderecoCadastrarParceiro(isRequired)),

      // SERVIÇOS OFERECIDOS
      servicos: this.fb.nonNullable.control<ParceiroServico[]>([], {
        validators: Validators.required,
      }),
      modalidade: this.fb.nonNullable.control<ModalidadeParceiroEnum | null>(null, {
        validators: Validators.required
      }),
      //DADOS BANCARIOS
      sellerId: this.fb.control<string>('', { validators: Validators.pattern(UUID_PATTERN) }),
      banco: this.fb.nonNullable.control<Banco | null>(null),
      tipoConta: this.fb.control<TipoContaEnum | null>(null),
      agencia: this.fb.nonNullable.control<string | null>('', {
        validators: Validators.maxLength(4)
      }),
      agenciaDigito: this.fb.nonNullable.control<string | null>('', {
        validators: [
          Validators.maxLength(1),
          Validators.pattern(DIGITO_PATTERN)
        ]
      }),
      conta: this.fb.nonNullable.control<string | null>(null, {
        validators: Validators.maxLength(12)
      }),
      contaDigito: this.fb.nonNullable.control<string | null>('', {
        validators: [
          Validators.maxLength(1),
          Validators.pattern(DIGITO_PATTERN)
        ]
      }),
      convenios: this.fb.nonNullable.control<Convenio[]>([], { validators: Validators.required }),
      formasPagamento: this.fb.nonNullable.control<FormaPagamento[]>([], {
        validators: Validators.required,
      }),
      perguntasFrequentes: this.fb.nonNullable.control<PerguntasFrequentes[]>([]),
    } satisfies Form<Parceiro>;
  }

  private fieldValidationRequired(required: boolean) {
    return required ? Validators.required : null;
  }
}
