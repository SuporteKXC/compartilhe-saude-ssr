import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { FormaAtendimento } from 'src/app/modules/shared/models/parceiro/forma-atendimento.model';
import { LocalAtendimento } from 'src/app/modules/shared/models/parceiro/local-atendimento.model';
import { ParceiroProfissionalResumo } from 'src/app/modules/shared/models/parceiro/parceiro-profissional-resumo.model';
import { Preco } from 'src/app/modules/shared/models/produto/preco.model';
import CustomFormPriceValidator from 'src/app/modules/shared/validators/custom-form-price-validator/custom-form-price-validator';
import { FormCadastrarProdutoService } from '../form-cadastrar-produto.service';

@Injectable({
  providedIn: 'root'
})
export class FormCadastrarPrecoService {

  public formTabelaValores = this.fb.group<Form<Preco>>({
    id: this.fb.nonNullable.control<number | null>(null),
    index: this.fb.nonNullable.control<number | null>(null),
    localAtendimento: this.fb.nonNullable.control<LocalAtendimento | null>(null),
    parceiroProfissional: this.fb.nonNullable.control<ParceiroProfissionalResumo | null>(null),
    formaAtendimento: this.fb.nonNullable.control<FormaAtendimento | null>(null, {
      validators: Validators.required
    }),
    valorReferencia: this.fb.nonNullable.control<number>(0, {
      validators: Validators.required
    }),
    valorVista: this.fb.nonNullable.control<number>(0, {
      validators: Validators.required
    }),
    valorRepasse: this.fb.nonNullable.control<number>(0, {
      validators: Validators.required
    }),
    valorComissao: this.fb.nonNullable.control<number>(0, {
      validators: [Validators.required, Validators.min(0)]
    }),
    percentualDesconto: this.fb.nonNullable.control<number>(0, {
      validators: Validators.required
    }),
  } as unknown as Form<Preco>,
    {
      validators: [
        CustomFormPriceValidator.ConditionalValidationLocalAtendimento('localAtendimento', 'formaAtendimento'),
        CustomFormPriceValidator.Referencia('valorReferencia'),
        CustomFormPriceValidator.Vista('valorVista', 'valorReferencia'),
        CustomFormPriceValidator.Repasse('valorRepasse', 'valorVista'),
        Validators.required
      ]
    }
  );
  
  constructor(
    private fb: FormBuilder,
    private formService: FormCadastrarProdutoService
  ) { }

  get priceCustomErros() {
    return {
      referenciaInvalid: 'Valor obrigatório.',
      comissaoInvalid: 'Comissão não pode ser negativa.',
      min: 'Comissão não pode ser negativa.',
      vistaInvalid: 'O valor à vista não pode ser maior ou igual ao valor de referência.',
      repasseInvalid: 'O valor de repasse não pode ser superior ao valor à vista.',
    };
  }

  get idParceiro() {
    return this.formTabelaValores.getRawValue().parceiroProfissional?.id;
  }

  get isLocalAtendimentoRequired(): boolean {
    const formaAtendimento = this.formTabelaValores.getRawValue().formaAtendimento;
    if (formaAtendimento) {
      return formaAtendimento.descricao === FormaAtendimentoEnum.PRESENCIAL;
    }
    return false;
  }

  get comissao() {
    const valores = this.formTabelaValores.getRawValue();
    if (!valores.valorVista && valores.valorVista !== 0)
      return 0;

    if (!valores.valorRepasse && valores.valorRepasse !== 0)
      return 0;

    return valores.valorVista - valores.valorRepasse;
  }

  get desconto() {
    const valores = this.formTabelaValores.getRawValue();
    if (valores.valorVista && valores.valorReferencia)
      return 100 - Math.ceil((valores.valorVista / valores.valorReferencia) * 100);
    return 0;
  }

  get formTabelaValoresValues() {
    return this.formTabelaValores.getRawValue();
  }

  get localAtendimentoControl() {
    return this.formTabelaValores.get('localAtendimento');
  }

  get parceiroProfissionalControl() {
    return this.formTabelaValores.get('parceiroProfissional');
  }

  get formaAtendimentoControl() {
    return this.formTabelaValores.get('formaAtendimento');
  }

  savePreco() {
    const index = this.formTabelaValores.getRawValue().index;

    if (index === null) {
      const newPreco = { ...this.formTabelaValoresValues, index: null };

      this.formService.formProduto.patchValue({
        precos: [
          ...this.formService.produtoPrecos,
          newPreco
        ]
      });
      
    } else {
      this.formService.produtoPrecos.splice(index, 1);

      const preco = { ...this.formTabelaValoresValues, index };

      this.formService.produtoPrecos.splice(index, 0, preco);

      this.formService.formProduto.patchValue({
        precos: [...this.formService.produtoPrecos]
      });
    }
  }

  editPreco(index: number) {
    this.formTabelaValores.patchValue({
      ...this.formService.produtoPrecos[index],
      index
    });

    this.setControlDirtyToTrue();
  }

  deletePreco(index: number) {
    this.formService.produtoPrecos.splice(index, 1);
    this.formService.formProduto.get('precos')?.patchValue(this.formService.produtoPrecos);
  }

  setValues() {
    this.formTabelaValores.patchValue({
      percentualDesconto: this.desconto,
      valorComissao: this.comissao,
    });
  }

  private setControlDirtyToTrue() {
    Object.keys(this.formTabelaValores.controls).forEach(key => {
      const control = this.formTabelaValores.get(key);
      if (control) control.markAsDirty();
    });
  }
}
