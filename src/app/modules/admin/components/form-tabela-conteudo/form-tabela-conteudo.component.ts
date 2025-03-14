import { Component, Input, OnInit } from '@angular/core';
import { FormCadastrarPerguntasService } from '../../services/form-cadastrar-parceiro/form-cadastrar-perguntas/form-cadastrar-perguntas.service';
import { CategoriaParceiroEnum } from '../../pages/gestao-parceiros/enums/categoria-parceiro.enum';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationModalComponent } from 'src/app/modules/shared/components/modals/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-form-tabela-conteudo',
  templateUrl: './form-tabela-conteudo.component.html',
  styleUrls: ['./form-tabela-conteudo.component.scss'],
})
export class FormTabelaConteudoComponent implements OnInit {
  @Input({ required: true }) categoriaParceiro!: CategoriaParceiroEnum;

  constructor(
    protected formService: FormCadastrarPerguntasService,
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.formService.categoriaParceiro = this.categoriaParceiro;
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
