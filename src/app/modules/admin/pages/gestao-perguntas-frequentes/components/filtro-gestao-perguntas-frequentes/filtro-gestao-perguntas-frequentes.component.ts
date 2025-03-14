import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectOption, selectOptionsFromEnum } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { FormFiltroGestaoPerguntasFrequentesService } from '../../services/form-filtro-gestao-perguntas-frequentes.service';
import { CategoriaPerguntasFrequentesEnum } from 'src/app/modules/shared/enums/categoria-perguntas-frequentes.enum';

@Component({
  selector: 'app-filtro-gestao-perguntas-frequentes',
  templateUrl: './filtro-gestao-perguntas-frequentes.component.html',
  styleUrls: ['./filtro-gestao-perguntas-frequentes.component.scss']
})
export class FiltroGestaoPerguntasFrequentesComponent implements OnInit {

  @Output() shouldSearchAgain = new EventEmitter<void>();

  protected categorias: SelectOption<string>[] = selectOptionsFromEnum(CategoriaPerguntasFrequentesEnum);

  constructor(private formFiltroPerguntasFrequentes: FormFiltroGestaoPerguntasFrequentesService) { }

  ngOnInit(): void {
    this.categorias.unshift({ label: "Todas", value: "TODAS" });
  }

  public get formFiltro() {
    return this.formFiltroPerguntasFrequentes;
  }
}
