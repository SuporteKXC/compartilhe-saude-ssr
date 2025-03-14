import { ParceirosAdmService } from 'src/app/modules/admin/services/parceiros-adm/parceiros-adm.service';
import { Component, OnInit } from '@angular/core';
import { FormCadastrarProfissionalService } from 'src/app/modules/admin/services/form-cadastrar-profissional/form-cadastrar-profissional.service';
import { Convenio } from 'src/app/modules/shared/models/parceiro/convenio.model';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { FormaPagamento } from 'src/app/modules/shared/models/parceiro/forma-pagamento.model';

@Component({
  selector: 'app-form-dados-atendimento',
  templateUrl: './form-dados-atendimento.component.html',
  styleUrls: ['./form-dados-atendimento.component.scss']
})
export class FormDadosAtendimentoComponent implements OnInit {

  protected convenios: SelectOption<Convenio>[] = [];
  protected formasPagamento: SelectOption<FormaPagamento>[] = [];

  constructor(
    protected formCadastrarProfissionalService: FormCadastrarProfissionalService,
    private parceiroService: ParceirosAdmService
  ) { }

  ngOnInit(): void {
    this.parceiroService.listarConvenios().subscribe((res) => {
      this.convenios = res.map(convenio => ({
        label: convenio.descricao,
        value: convenio
      }));
    });

    this.parceiroService.listarFormasPagamento().subscribe((res) => {
      this.formasPagamento = res.map((formaPagamento) => ({
        label: formaPagamento.descricao,
        value: formaPagamento
      }));
    });
  }
}
