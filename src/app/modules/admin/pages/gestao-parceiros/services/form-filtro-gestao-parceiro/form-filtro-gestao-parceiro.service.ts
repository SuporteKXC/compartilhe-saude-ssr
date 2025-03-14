import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ParceiroFiltro } from '../../models/parceiro-filtro.model';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { CategoriaParceiroEnum } from '../../enums/categoria-parceiro.enum';

@Injectable({
  providedIn: 'root',
})
export class FormFiltroGestaoParceiroService {
  private formFiltro = this.fb.group<Form<ParceiroFiltro>>({
    nome: this.fb.control(''),
    categoria: this.fb.control<CategoriaParceiroEnum[] | null>(null),
    descricaoSubcategoria: this.fb.control<string[] | null>(null),
    ativo: this.fb.control<boolean | null>(null),
  });

  public get group(): typeof this.formFiltro {
    return this.formFiltro;
  }

  public get parsedData(): ParceiroFiltro {
    return this.formFiltro.getRawValue();
  }

  clearSubcategoria() {
    this.formFiltro.get("descricaoSubcategoria")?.setValue(null);
  }

  constructor(private fb: FormBuilder) {}
}
