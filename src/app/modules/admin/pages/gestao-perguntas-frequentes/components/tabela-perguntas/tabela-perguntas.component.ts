import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PerguntasFrequentesAdmService } from 'src/app/modules/admin/services/perguntas-frequentes-adm/perguntas-frequentes-adm.service';
import { PerguntaFiltro } from '../../models/pergunta-filtro.model';
import { FormFiltroGestaoPerguntasFrequentesService } from '../../services/form-filtro-gestao-perguntas-frequentes.service';
import { MessageService } from 'primeng/api';
import { TOAST_TIME_MS } from 'src/app/modules/shared/constants/animations';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationModalComponent } from 'src/app/modules/shared/components/modals/confirmation-modal/confirmation-modal.component';
import { TableComponent } from 'src/app/modules/shared/components/layout/table/table.component';
import { AccordionContent } from 'src/app/modules/shared/models/accordion-content.model';

@Component({
  selector: 'app-tabela-perguntas',
  templateUrl: './tabela-perguntas.component.html',
  styleUrls: ['./tabela-perguntas.component.scss']
})
export class TabelaPerguntasComponent implements OnInit {
  @ViewChild('table', { static: true }) table?: TableComponent;

  @Input() shouldSearchAgain$!: Subject<void>;

  private toastTime = TOAST_TIME_MS;

  protected page = 1;
  protected pageSize = 15;
  protected isLoading = false;
  protected isError = false;
  protected totalPerguntas!: number;

  protected perguntas!: AccordionContent[];

  constructor(
    private perguntasFrequentesService: PerguntasFrequentesAdmService,
    private form: FormFiltroGestaoPerguntasFrequentesService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.shouldSearchAgain$.subscribe(() => {
      this.resetTable();
      this.getPerguntas();
    });
  }

  getPerguntas() {
    this.isLoading = true;
    const filtros: PerguntaFiltro = this.form.parsedData;

    const queryParams = { page: this.page, pageSize: this.pageSize };

    this.perguntasFrequentesService.listarPerguntasFrequentes(queryParams, filtros).subscribe({
      next: (response) => {
        this.isLoading = false;
        const parsedResponse = response.data.map(res => ({ titulo: res.pergunta, conteudo: res.resposta, ...res }));
        this.perguntas = this.perguntas.concat(parsedResponse);
        this.totalPerguntas = response.metadata.numRecords;
      },
      error: () => (this.isError = true)
    });
  }

  openDeleteModal(id: number) {
    const confirmation = this.dialogService.open(ConfirmationModalComponent, {
      data: {
        titulo: 'Deseja remover esta pergunta?',
        botaoCancelar: {
          label: 'Cancelar',
          outlined: true,
        },
        botaoConfirmar: {
          label: 'Remover'
        }
      },
      styleClass: 'confirmation-modal',
    });

    confirmation.onClose.subscribe((res: boolean) => {
      if (res) {
        this.deletarPerguntaFrequente(id);
      }
    });
  }

  navigateToEdit(id: number) {
    this.router.navigate(["/", "admin", "dashboard", "perguntas-frequentes", id, "editar"]);
  }

  private deletarPerguntaFrequente(id: number) {
    this.perguntasFrequentesService.deletaPerguntaFrequente(id).subscribe({
      next: () => {
        this.isLoading = true;
        this.shouldSearchAgain$.next();
      },
      complete: () => { this.exibirMensagem("Pergunta removida com sucesso!"); },
      error: () => { this.isLoading = false; }
    });
  }

  private exibirMensagem(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: message,
      icon: 'check_circle',
      life: this.toastTime,
    });
  }

  resetTable() {
    this.perguntas = [];
    this.totalPerguntas = 0;
    this.page = 1;
    this.table?.resetTable();
  }
}
