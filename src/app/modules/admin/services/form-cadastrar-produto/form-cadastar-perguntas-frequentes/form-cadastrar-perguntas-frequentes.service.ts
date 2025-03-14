import { Injectable } from '@angular/core';
import { AccordionContent } from 'src/app/modules/shared/models/accordion-content.model';
import { PerguntasFrequentes } from 'src/app/modules/shared/models/pergunta-frequente.model';
import { CategoriaPerguntasFrequentes } from 'src/app/modules/shared/models/categoria-pergunta-frequente.model';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { FormBuilder } from '@angular/forms';
import { FormCadastrarProdutoService } from '../form-cadastrar-produto.service';

@Injectable({
  providedIn: 'root'
})

export class FormCadastrarPerguntasFrequentesService {
  public perguntasAccordion!: AccordionContent[];

  public formTabelaPerguntas = this.fb.group<Form<PerguntasFrequentes>>({
    id: this.fb.nonNullable.control<number | null>({
      value: null, disabled: false
    }),
    index: this.fb.nonNullable.control<number | null>({
      value: null, disabled: false
    }),
    pergunta: this.fb.nonNullable.control<string>({
      value: '', disabled: false
    }),
    resposta: this.fb.nonNullable.control<string>({
      value: '', disabled: false
    }),
    categorias: this.fb.nonNullable.control<CategoriaPerguntasFrequentes[]>({
      value: [], disabled: false
    })
  } as unknown as Form<PerguntasFrequentes>);

  constructor(
    private fb: FormBuilder,
    private formProdutoService: FormCadastrarProdutoService,
  ) { }

  get formTabelaPerguntasValues() {
    return this.formTabelaPerguntas.getRawValue();
  }

  save(pergunta: PerguntasFrequentes) {
    const index = this.formTabelaPerguntas.getRawValue().index;

    if (index === null) {
      const novaPergunta = { ...pergunta, index: null };

      this.formProdutoService.formProduto.patchValue({
        perguntasFrequentes: [
          ...this.perguntasFrequentes(),
          novaPergunta
        ]
      });

    } else {
      this.perguntasFrequentes().splice(index, 1);

      const pergunta = { ...this.formTabelaPerguntasValues, index };

      this.perguntasFrequentes().splice(index, 0, pergunta);

      this.formProdutoService.formProduto.patchValue({
        perguntasFrequentes: this.perguntasFrequentes()
      });
    }

    this.setPerguntas();
  }

  delete(index: number) {
    this.perguntasFrequentes().splice(index, 1);
    this.formProdutoService.formProduto.patchValue({
      perguntasFrequentes: [...this.perguntasFrequentes()]
    });
    this.setPerguntas();
  }

  setPerguntas() {
    const perguntas = this.formProdutoService.formProduto.getRawValue().perguntasFrequentes as PerguntasFrequentes[];
    this.perguntasAccordion = this.parseToAccordionContent(perguntas);
  }

  parseToAccordionContent(perguntas: PerguntasFrequentes[]) {
    return perguntas.map(item => ({
      titulo: item.pergunta,
      conteudo: item.resposta
    } satisfies AccordionContent));
  }

  perguntasFrequentes() {
    return this.formProdutoService.perguntasFrequentes;
  }
}
