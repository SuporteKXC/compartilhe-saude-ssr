import { Component, OnInit } from '@angular/core';
import { FormCadastrarPerguntasFrequentesService } from 'src/app/modules/admin/services/form-cadastrar-produto/form-cadastar-perguntas-frequentes/form-cadastrar-perguntas-frequentes.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationModalComponent } from 'src/app/modules/shared/components/modals/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-form-conteudo',
  templateUrl: './form-conteudo.component.html',
  styleUrls: ['./form-conteudo.component.scss']
})
export class FormConteudoComponent implements OnInit {
  constructor(
    protected formService: FormCadastrarPerguntasFrequentesService,
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.formService.setPerguntas();
  }

  openDeleteModal(index: number) {
    const reference = this.dialogService.open(ConfirmationModalComponent, {
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

    reference.onClose.subscribe((res: boolean) => {
      if (res) {
        this.formService.delete(index);
      }
    });
  }
}
