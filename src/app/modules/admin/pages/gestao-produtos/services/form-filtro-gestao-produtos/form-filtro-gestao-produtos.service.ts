import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoriaProduto } from '../../enums/CategoriaProduto';
import { ProdutoFiltro } from '../../models/produto-filtro.model';
import { Form } from 'src/app/modules/shared/interfaces/form';

@Injectable({
  providedIn: 'root'
})
export class FormFiltroGestaoProdutosService {
  private formFiltro = this.fb.group<Form<ProdutoFiltro>>({
    nome: this.fb.control(''),
    categoria: this.fb.control<CategoriaProduto[] | null>(null),
    descricaoSubcategoria: this.fb.control<string[] | null>(null),
    ativo: this.fb.control<boolean | null>(null),
  });

  public get group(): typeof this.formFiltro {
    return this.formFiltro;
  }

  public get parsedData(): ProdutoFiltro {
    return this.formFiltro.getRawValue();
  }

  clearSubcategoria() {
    this.formFiltro.get("descricaoSubcategoria")?.setValue(null);
  }

  constructor(private fb: FormBuilder) {}
}
