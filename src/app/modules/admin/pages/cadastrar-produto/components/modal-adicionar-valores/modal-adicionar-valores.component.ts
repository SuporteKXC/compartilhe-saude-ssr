import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormaAtendimento } from 'src/app/modules/shared/models/parceiro/forma-atendimento.model';
import { LocalAtendimento } from 'src/app/modules/shared/models/parceiro/local-atendimento.model';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';
import { ParceiroProfissionalResumo } from 'src/app/modules/shared/models/parceiro/parceiro-profissional-resumo.model';
import { FormCadastrarPrecoService } from 'src/app/modules/admin/services/form-cadastrar-produto/form-cadastrar-preco/form-cadastrar-preco.service';

@Component({
  selector: 'app-modal-adicionar-valores',
  templateUrl: './modal-adicionar-valores.component.html',
  styleUrls: ['./modal-adicionar-valores.component.scss']
})
export class ModalAdicionarValoresComponent implements OnInit {
  public parceiroProfissionalOptions: SelectOption<ParceiroProfissionalResumo>[] = [];
  public localAtendimentoOptions: SelectOption<LocalAtendimento>[] = [];
  public formaAtendimentoOptions: SelectOption<FormaAtendimento>[] = [];

  protected parceiros!: ParceiroProfissionalResumo[];

  protected form!: FormGroup;

  constructor(
    protected formService: FormCadastrarPrecoService,
    private parceirosService: ParceirosService,
  ) {
    this.form = formService.formTabelaValores;
  }

  ngOnInit(): void {
    this.popularLocalAtendimentoOptions();
    this.popularProfissionalOptions();
  }

  popularProfissionalOptions() {
    this.parceirosService.listarProfissionais().subscribe(response => {

      this.parceiros = response;

      this.popularFormaAtendimentoOptions();

      this.parceiroProfissionalOptions = response.map(item => ({
        label: item.nome,
        value: {
          id: item.id,
          nome: item.nome,
          formasAtendimento: item.formasAtendimento
        }
      }));
    });
  }

  popularFormaAtendimentoOptions() {
    const idParceiro = this.formService.idParceiro;

    if (idParceiro) {
      this.formaAtendimentoOptions = this.parceiros
        .find(parceiro => parceiro.id === idParceiro)?.formasAtendimento
        .map(item => ({
          label: item.descricao,
          value: {
            id: item.id,
            descricao: item.descricao,
            teleconsulta: item.teleconsulta
          }
        })) ?? [];
    } else {
      this.parceirosService.listarFormasAtendimento(true).subscribe(response => {
        this.formaAtendimentoOptions = response.map(item => ({
          label: item.descricao,
          value: {
            id: item.id,
            descricao: item.descricao,
            teleconsulta: item.teleconsulta
          }
        }));
      });
    }
  }

  popularLocalAtendimentoOptions() {
    const idParceiro = this.formService.idParceiro;

    this.parceirosService.listarLocaisAtendimento(idParceiro, !idParceiro).subscribe(response => {
      this.localAtendimentoOptions = response.map(item => ({
        label: item.nome,
        value: { id: item.id, nome: item.nome }
      }));
    });
  }

  carregarLocalAtendimento() {
    if (this.form.getRawValue().formaAtendimento.descricao === FormaAtendimentoEnum.PRESENCIAL) {
      this.popularLocalAtendimentoOptions();
    } else {
      this.formService.localAtendimentoControl?.reset();
    }
  }

  recarregarForm() {
    this.formService.formaAtendimentoControl?.reset();
    this.formService.localAtendimentoControl?.reset();
    this.popularFormaAtendimentoOptions();
  }
}
