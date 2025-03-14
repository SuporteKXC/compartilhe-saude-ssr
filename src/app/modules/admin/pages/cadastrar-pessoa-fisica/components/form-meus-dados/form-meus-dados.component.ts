import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EstadoCivil } from 'src/app/modules/shared/enums/estado-civil.enum';
import { RendaSalarioMinimo } from 'src/app/modules/shared/enums/renda-salario-minimo.enum';
import { SexoBiologico } from 'src/app/modules/shared/enums/sexo-biologico.enum';
import { selectOptionsFromEnum } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { RadioOption } from 'src/app/modules/shared/models/radio-option.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-meus-dados',
  templateUrl: './form-meus-dados.component.html',
  styleUrls: ['./form-meus-dados.component.scss']
})
export class FormMeusDadosComponent {
  @Input({ required: true }) formGroup!: FormGroup;
  
  protected estadoCivilOptions = selectOptionsFromEnum(EstadoCivil);
  protected rendaOptions = selectOptionsFromEnum(RendaSalarioMinimo);
  protected sexoBiologicoOptions: RadioOption<SexoBiologico>[] = [
    { label: 'Feminino', value: SexoBiologico.F },
    { label: 'Masculino', value: SexoBiologico.M },
  ];

  protected pathId!: number;

  public get telefoneCustomErrors() {
    return {
      pattern: 'Por favor, indique um telefone válido.',
    };
  }

  public get cpfCustomErrors() {
    return {
      invalidCpf: 'Por favor, indique um CPF válido.',
    };
  }

  public get dataNascimentoCustomErrors() {
    const errorMessage = 'Por favor, indique uma data de nascimento válida.';
    return {
      invalidDate: errorMessage,
      futureDate: errorMessage,
      pastDate: errorMessage,
    };
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  get hasId(): boolean {
    const pathId = this.activatedRoute.snapshot.params['id'];
    return Boolean(pathId);
  }
}
