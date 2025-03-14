import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { PerguntasFrequentes } from 'src/app/modules/shared/models/pergunta-frequente.model';
import { CategoriaPerguntasFrequentes } from 'src/app/modules/shared/models/categoria-pergunta-frequente.model';
import { FormCadastrarProfissionalService } from '../../form-cadastrar-profissional/form-cadastrar-profissional.service';
import { AccordionContent } from 'src/app/modules/shared/models/accordion-content.model';
import { CategoriaParceiroEnum } from '../../../pages/gestao-parceiros/enums/categoria-parceiro.enum';
import { FormCadastrarEstabelecimentoService } from '../../form-cadastrar-estabelecimento/form-cadastrar-estabelecimento.service';

@Injectable({
  providedIn: 'root'
})
export class FormCadastrarPerguntasService {
  private _categoriaParceiro!: CategoriaParceiroEnum;

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

  formService!: FormCadastrarProfissionalService | FormCadastrarEstabelecimentoService;
  constructor(
    private fb: FormBuilder,
    private formProfissionalService: FormCadastrarProfissionalService,
    private formEstabelecimentoService: FormCadastrarEstabelecimentoService,
  ) { }

  save(pergunta: PerguntasFrequentes) {
    const index = this.formTabelaPerguntas.getRawValue().index;

    if (index === null) {
      const novaPergunta = { ...pergunta, index: null };

      this.getForm(this._categoriaParceiro).patchValue({
        perguntasFrequentes: [
          ...this.perguntasFrequentes(),
          novaPergunta
        ]
      });
    } else {
      this.perguntasFrequentes().splice(index, 1);

      const pergunta = { ...this.formTabelaPerguntasValues, index };

      this.perguntasFrequentes().splice(index, 0, pergunta);

      this.getForm(this._categoriaParceiro).patchValue({
        perguntasFrequentes: [...this.perguntasFrequentes()]
      });
    }

    this.setPerguntas();
  }

  delete(index: number) {
    this.perguntasFrequentes().splice(index, 1);
    this.getForm(this._categoriaParceiro).patchValue({
      perguntasFrequentes: [...this.perguntasFrequentes()]
    });
    this.setPerguntas();
  }

  get formTabelaPerguntasValues() {
    return this.formTabelaPerguntas.getRawValue();
  }

  setPerguntas() {
    const form = this.getForm(this._categoriaParceiro);
    const perguntas = form.getRawValue().perguntasFrequentes;

    this.perguntasAccordion = this.parseToAccordionContent(perguntas);
  }

  parseToAccordionContent(perguntas: PerguntasFrequentes[]) {
    return perguntas.map(item => ({
      titulo: item.pergunta,
      conteudo: item.resposta
    } satisfies AccordionContent));
  }

  set categoriaParceiro(categoria: CategoriaParceiroEnum) {
    this._categoriaParceiro = categoria;
  }

  getForm(categoria: CategoriaParceiroEnum) {
    if(categoria === CategoriaParceiroEnum.PROFISSIONAL_SAUDE) {
      return this.formProfissionalService.formProfissional;
    }
    return this.formEstabelecimentoService.formEstabelecimento;
  }

  perguntasFrequentes() {
    if(this._categoriaParceiro === CategoriaParceiroEnum.PROFISSIONAL_SAUDE) {
      return this.formProfissionalService.perguntasFrequentes;
    }
    return this.formEstabelecimentoService.perguntasFrequentes;
  }
}
