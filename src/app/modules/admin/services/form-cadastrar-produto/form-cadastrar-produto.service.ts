import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { ProdutoAdmin } from '../../models/produto-admin.model';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { ProdutoSubcategoria } from '../../models/produto-subcategoria.model';
import { linkImageValidator } from 'src/app/modules/shared/validators/link-validator/link-validator';
import { CategoriaProduto } from '../../pages/gestao-produtos/enums/CategoriaProduto';
import { Preco } from 'src/app/modules/shared/models/produto/preco.model';
import { PerguntasFrequentes } from 'src/app/modules/shared/models/pergunta-frequente.model';
import { FormBaseService } from 'src/app/modules/shared/services/form-base/form-base.service';
import { environment } from 'src/environments/environment';
import { removeImgPath } from 'src/app/modules/shared/functions/util/image-path';

@Injectable({
  providedIn: 'root',
})
export class FormCadastrarProdutoService extends FormBaseService {

  constructor() {
    super();
    this.formGroup = this.formProduto;
    this.checkChanges();
  }

  public formProduto = this.fb.group<Form<ProdutoAdmin>>({
    // SITUAÇÃO
    ativo: this.fb.nonNullable.control(true, { validators: Validators.required }),
    destaque: this.fb.nonNullable.control(false),

    // PRIORIDADE
    ordem: this.fb.nonNullable.control(null, { validators: [Validators.required, Validators.min(1)] }),

    // DADOS DO PRODUTO
    nome: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        Validators.maxLength(50)
      ]
    }),
    categoria: this.fb.control<CategoriaProduto | null>(null),
    subcategoria: this.fb.control<ProdutoSubcategoria | null>(null, {
      validators: [Validators.required]
    }),
    indicacao: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        Validators.maxLength(255)
      ]
    }),
    descricao: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        Validators.maxLength(512)
      ]
    }),
    observacao: this.fb.nonNullable.control<string>('', {
      validators: Validators.maxLength(255)
    }),
    preparo: this.fb.control<string>('', { validators: Validators.maxLength(2000) }),
    pathImagem: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        Validators.maxLength(255),
        linkImageValidator
      ]
    }),
    resumo
      : this.fb.nonNullable.control<string>('', {
        validators: [
          Validators.required,
          Validators.maxLength(150)
        ]
      }),

    // PRODUTOS RELACIONADOS
    produtosInteresse: this.fb.nonNullable.control(null, {
      validators: [
        Validators.required,
        Validators.maxLength(4)
      ]
    }),

    // ALTERAR PRODUTO
    id: this.fb.control(null),
    version: this.fb.control(null),

    // TABELA DE PREÇOS
    precos: this.fb.nonNullable.control<Preco[]>([], { validators: Validators.required }),
    perguntasFrequentes: this.fb.nonNullable.control<PerguntasFrequentes[]>([])
  } as unknown as Form<ProdutoAdmin>); // HACK

  get produtoPrecos(): Preco[] {
    return this.formProduto.getRawValue().precos ?? [];
  }

  get formProdutoPrecosControl() {
    return this.formProduto.get('precos');
  }

  get perguntasFrequentes() {
    return this.formProduto.getRawValue().perguntasFrequentes ?? [];
  }

  get isDisableSubmit(): boolean {
    return !this.formProduto.valid || this.isFormSaved;
  }

  get produto() {
    const data = this.formProduto.getRawValue();
    
    const basePath = environment.imgUrl;

    return {
      ...this.parseValue<ProdutoAdmin>(),
      pathImagem: removeImgPath(data.pathImagem, basePath)
    };
  }

  public togglePrecosRequireValidation(event: boolean) {
    if (!event) {
      this.formProdutoPrecosControl?.clearValidators();
    } else {
      this.formProdutoPrecosControl?.addValidators(Validators.required);
    }
    this.formProdutoPrecosControl?.updateValueAndValidity();
  }

}
