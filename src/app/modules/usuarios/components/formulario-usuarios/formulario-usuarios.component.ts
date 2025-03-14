import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PreCadastroFormService } from '../../services/pre-cadastro-form/pre-cadastro-form.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.scss']
})
export class FormularioUsuariosComponent {
  @Input()
  public loading = false;

  @Output()
  handleSubmit = new EventEmitter<boolean>();

  public pathImage = `${environment.imgUrl}/`;
  public isPasswordForm = false;

  constructor(protected preCadastroFormService: PreCadastroFormService) { }

  public get contatoWhatsappCustomErrors() {
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

  submitEvent() {
    this.handleSubmit.emit(true);
  }
}
