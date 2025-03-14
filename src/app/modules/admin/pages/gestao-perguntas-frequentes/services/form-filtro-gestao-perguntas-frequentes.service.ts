import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PerguntaFiltro } from '../models/pergunta-filtro.model';

@Injectable({
  providedIn: 'root'
})
export class FormFiltroGestaoPerguntasFrequentesService {

  private formFiltro = this.fb.group({
    busca: this.fb.control<string | null>(null),
    categoria: this.fb.control<string | null>(null),
  });

  public get group(): typeof this.formFiltro {
    return this.formFiltro;
  }

  public get busca(): string | null {
    return this.formFiltro.getRawValue().busca;
  }

  public get categoria(): string | null {
    return this.formFiltro.getRawValue().categoria;
  }

  public get isValid() {
    return Boolean(this.busca) || Boolean(this.categoria);
  }

  public get parsedData(): PerguntaFiltro {
    const enumKey = "TODAS";

    const filtro: PerguntaFiltro = this.formFiltro.getRawValue();
    const categoria = this.categoria == enumKey ? null : this.categoria;

    return { ...filtro, categoria: categoria };
  }

  constructor(private fb: FormBuilder) { }
}
