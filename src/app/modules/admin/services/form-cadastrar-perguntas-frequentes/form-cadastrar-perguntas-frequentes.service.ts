import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";
import { CategoriaPerguntasFrequentesEnum } from "src/app/modules/shared/enums/categoria-perguntas-frequentes.enum";
import { PerguntasFrequentes } from "src/app/modules/shared/models/pergunta-frequente.model";
import { FormBaseService } from "src/app/modules/shared/services/form-base/form-base.service";

@Injectable({
  providedIn: 'root',
})
export class FormCadastrarPerguntasFrequentesService extends FormBaseService {

  constructor() {
    super();
    this.formGroup = this.formPerguntasFrequentes;
    this.checkChanges();
  }

  public formPerguntasFrequentes = this.fb.group({
    id: this.fb.nonNullable.control<number | null>({
      value: null, disabled: false
    }),
    pergunta: this.fb.nonNullable.control<string | null>(
      { value: '', disabled: false },
      {
        validators: [
          Validators.required,
          Validators.maxLength(200)
        ]
      }
    ),
    resposta: this.fb.nonNullable.control<string | null>(
      { value: '', disabled: false },
      {
        validators: [
          Validators.required,
          Validators.maxLength(600)
        ]
      }
    ),
    categorias: this.fb.nonNullable.control<CategoriaPerguntasFrequentesEnum[] | null>(
      { value: [], disabled: false },
      { validators: Validators.required }
    ),
    version: this.fb.control<number | null>(null)
  });

  public get isValid() {
    return !this.formPerguntasFrequentes.valid || this.isFormSaved;
  }

  parsePerguntasFrequentes() {
    const { id, pergunta, resposta, version, categorias } = this.formPerguntasFrequentes.getRawValue();

    const perguntas: PerguntasFrequentes = {
      id,
      pergunta,
      resposta,
      version,
      categorias: [],
      index: null
    };

    if (categorias) {
      perguntas.categorias = categorias.map((categoria) => {
        return {
          id: null,
          idPerguntaFrequente: null,
          categoria
        };
      });
    }

    return perguntas;
  }
}
