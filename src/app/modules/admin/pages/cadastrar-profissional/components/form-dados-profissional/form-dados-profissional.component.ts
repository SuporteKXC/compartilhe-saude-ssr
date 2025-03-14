import { Component } from '@angular/core';
import { FormCadastrarProfissionalService } from 'src/app/modules/admin/services/form-cadastrar-profissional/form-cadastrar-profissional.service';
import { SexoBiologico } from 'src/app/modules/shared/enums/sexo-biologico.enum';
import { RadioOption } from 'src/app/modules/shared/models/radio-option.model';

@Component({
  selector: 'app-form-dados-profissional',
  templateUrl: './form-dados-profissional.component.html',
  styleUrls: ['./form-dados-profissional.component.scss']
})
export class FormDadosProfissionalComponent {

  protected sexoBiologicoOptions: RadioOption<SexoBiologico>[] = [
    { label: 'Feminino', value: SexoBiologico.F },
    { label: 'Masculino', value: SexoBiologico.M },
  ];
  
  constructor(protected formCadastrarProfissionalService: FormCadastrarProfissionalService) {}

  public get cpfCustomErrors() {
    return {
      invalidCpf: 'Por favor, indique um CPF válido.',
    };
  }

  public get linkImageCustomErrors() {
    return {
      invalidLinkImage: 'Por favor, indique um link válido.',
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

  public get telefoneCustomErrors() {
    return {
      pattern: 'Por favor, indique um telefone válido.',
    };
  }
}
