import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PerguntasFrequentesAdmService } from 'src/app/modules/admin/services/perguntas-frequentes-adm/perguntas-frequentes-adm.service';
import { PerguntasFrequentes } from 'src/app/modules/shared/models/pergunta-frequente.model';

@Component({
  selector: 'app-modal-adicionar-perguntas-frequentes',
  templateUrl: './modal-adicionar-perguntas-frequentes.component.html',
  styleUrls: ['./modal-adicionar-perguntas-frequentes.component.scss']
})
export class ModalAdicionarPerguntasFrequentesComponent {
  @Output() handleSave = new EventEmitter();

  protected perguntas!: PerguntasFrequentes[];

  protected page = 1;
  protected pageSize = 4;
  protected total = 0;

  protected formBusca = new FormGroup({
    busca: new FormControl<string>({
      value: '', disabled: false
    }, [Validators.required, Validators.minLength(3)])
  });

  get isFormValid() {
    return this.formBusca.valid;
  }

  get busca() {
    return this.formBusca.getRawValue().busca;
  }

  constructor(private perguntasFrequentes: PerguntasFrequentesAdmService) { }

  searchPerguntaFrequente() {
    this.perguntasFrequentes.listarPerguntasFrequentes(
      { page: 1, pageSize: this.pageSize },
      { busca: this.busca }
    ).subscribe((res) => {
      this.perguntas = res.data;
      this.page = res.metadata.nextPage;
      this.total = res.metadata.numRecords;
    });
  }

  nextPage() {
    this.perguntasFrequentes.listarPerguntasFrequentes(
      { page: this.page, pageSize: this.pageSize },
      { busca: this.busca }
    ).subscribe((res) => {
      this.perguntas.push(...res.data);
      this.page = res.metadata.nextPage;
      this.total = res.metadata.numRecords;
    });
  }

  get isPageable() {
    return this.perguntas.length < this.total && this.perguntas.length !== 0 && this.page;
  }
}
