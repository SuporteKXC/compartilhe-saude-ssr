import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';
import { CategoriaParceiroEnum } from '../../../gestao-parceiros/enums/categoria-parceiro.enum';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { TipoEstabelecimento } from 'src/app/modules/shared/models/parceiro/tipo-estabelecimento.model';
import { ParceirosAdmService } from 'src/app/modules/admin/services/parceiros-adm/parceiros-adm.service';
import { FormaPagamento } from 'src/app/modules/shared/models/parceiro/forma-pagamento.model';
import { Convenio } from 'src/app/modules/shared/models/parceiro/convenio.model';

@Component({
  selector: 'app-form-informacoes-atendimento',
  templateUrl: './form-informacoes-atendimento.component.html',
  styleUrls: ['./form-informacoes-atendimento.component.scss']
})
export class FormInformacoesAtendimentoComponent implements OnInit {
  @Input({ required: true }) formGroup!: FormGroup;
  @Input() required = true;

  public tiposEstabelecimentoOptions: SelectOption<TipoEstabelecimento>[] = [];
  protected convenios!: SelectOption<Convenio>[];
  protected formasPagamento!: SelectOption<FormaPagamento>[];

  constructor(private parceiroService: ParceirosService, private parceiroAdmService: ParceirosAdmService) { }

  ngOnInit(): void {
    this.parceiroService.listarSubcategorias([CategoriaParceiroEnum.ESTABELECIMENTO]).subscribe(tipoEstabelecimentos => {
      this.tiposEstabelecimentoOptions = tipoEstabelecimentos.map(tipoEstabelecimento => ({
        label: tipoEstabelecimento.descricao,
        value: {
          descricao: tipoEstabelecimento.descricao,
          id: tipoEstabelecimento.id
        }
      }));
    });

    this.parceiroAdmService.listarConvenios().subscribe((res) => {
      this.convenios = res.map(convenio => ({
        label: convenio.descricao,
        value: convenio
      }));
    });

    this.parceiroAdmService.listarFormasPagamento().subscribe((res) => {
      this.formasPagamento = res.map((formaPagamento) => ({
        label: formaPagamento.descricao,
        value: formaPagamento
      }));
    });
  }
}
