import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParceiroServico } from 'src/app/modules/shared/models/parceiro/parceiro-servico.model';
import { FormCadastrarEstabelecimentoService } from 'src/app/modules/admin/services/form-cadastrar-estabelecimento/form-cadastrar-estabelecimento.service';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';

@Component({
  selector: 'app-form-servicos-oferecidos',
  templateUrl: './form-servicos-oferecidos.component.html',
  styleUrls: ['./form-servicos-oferecidos.component.scss'],
})
export class FormServicosOferecidosComponent implements OnInit {
  @Input({ required: true }) formGroup!: FormGroup;
  @Input() required = true;

  public servicosOptions: SelectOption<ParceiroServico>[] = [];

  public get servicosOferecidosCustomErrors() {
    return {
      teleconsultaSemFormaAtendimento:
        'O serviço de Teleconsulta só é válido se a forma de atendimento de atendimento On-line é oferecida.',
    };
  }

  constructor(
    protected formEstabelecimentoService: FormCadastrarEstabelecimentoService,
    private parceiroService: ParceirosService
  ) {}

  ngOnInit(): void {
    this.parceiroService.listarServicos().subscribe((response) => {
      this.servicosOptions = response.map((servico) => ({
        label: servico.descricao,
        value: {
          descricao: servico.descricao,
          id: servico.id,
        },
      }));
    });
  }
}
