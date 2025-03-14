import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormaAtendimento } from 'src/app/modules/shared/models/parceiro/forma-atendimento.model';
import { FormCadastrarProfissionalService } from 'src/app/modules/admin/services/form-cadastrar-profissional/form-cadastrar-profissional.service';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';

@Component({
  selector: 'app-form-forma-atendimento',
  templateUrl: './form-forma-atendimento.component.html',
  styleUrls: ['./form-forma-atendimento.component.scss'],
})
export class FormFormaAtendimentoComponent implements OnInit {
  protected form!: FormGroup;

  public formaAtendimentoOptions: SelectOption<FormaAtendimento>[] = [];

  public get formaAtendimentoCustomErrors() {
    return {
      formasAtendimentoSemTeleconsulta:
        'A forma de atendimento On-line só é válida se o serviço de Teleconsulta é oferecido.',
    };
  }

  constructor(
    private formCadastrarProfissionalService: FormCadastrarProfissionalService,
    private parceirosService: ParceirosService
  ) {
    this.form = formCadastrarProfissionalService.formProfissional;
  }

  ngOnInit(): void {
    this.parceirosService.listarFormasAtendimento().subscribe((response) => {
      this.formaAtendimentoOptions = response.map((formaAtendimento) => ({
        label: formaAtendimento.descricao,
        value: {
          id: formaAtendimento.id,
          descricao: formaAtendimento.descricao,
          teleconsulta: formaAtendimento.teleconsulta,
        },
      }));
    });
  }

  get locaisAtendimentControl() {
    return this.form.get('locaisAtendimento');
  }

  resetLocaisAtendimento() {
    const isPresencial = this.form.get('formasAtendimento')?.value.find((formaAtendimento: FormaAtendimento) =>
      formaAtendimento.descricao === FormaAtendimentoEnum.PRESENCIAL
    );
    
    if (!isPresencial && this.locaisAtendimentControl) {
      this.locaisAtendimentControl.reset();
    }
  }
}