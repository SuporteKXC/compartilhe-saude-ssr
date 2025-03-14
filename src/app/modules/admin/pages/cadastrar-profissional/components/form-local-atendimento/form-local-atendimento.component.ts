import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LocalAtendimento } from 'src/app/modules/shared/models/parceiro/local-atendimento.model';
import { FormCadastrarProfissionalService } from 'src/app/modules/admin/services/form-cadastrar-profissional/form-cadastrar-profissional.service';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';
import { FormaAtendimento } from 'src/app/modules/shared/models/parceiro/forma-atendimento.model';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';

@Component({
  selector: 'app-form-local-atendimento',
  templateUrl: './form-local-atendimento.component.html',
  styleUrls: ['./form-local-atendimento.component.scss']
})
export class FormLocalAtendimentoComponent implements OnInit {
  protected form!: FormGroup;

  public localAtendimentoOptions: SelectOption<LocalAtendimento>[] = [];

  constructor(
    private formCadastrarProfissionalService: FormCadastrarProfissionalService,
    private parceirosService: ParceirosService
  ) {
    this.form = formCadastrarProfissionalService.formProfissional;
  }

  ngOnInit(): void {
    this.parceirosService.listarLocaisAtendimento().subscribe(response => {
      this.localAtendimentoOptions = response.map(localAtendimento => ({
        label: localAtendimento.nome,
        value: {
          id: localAtendimento.id,
          nome: localAtendimento.nome,
        }
      }));
    });
  }

  get hasPresencial() {
    return this.form.get('formasAtendimento')?.value.find((formaAtendimento: FormaAtendimento) =>
      formaAtendimento.descricao === FormaAtendimentoEnum.PRESENCIAL
    );
  }
}
