import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PreCadastroFormService } from '../../services/pre-cadastro-form/pre-cadastro-form.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-formulario-senha',
  templateUrl: './formulario-senha.component.html',
  styleUrls: ['./formulario-senha.component.scss']
})
export class FormularioSenhaComponent {
  @Input()
  public loading = false;
  
  @Output()
  handleSubmit = new EventEmitter<boolean>();

  public pathImage = environment.imgUrl;
  public isPasswordForm = false;

  constructor(protected preCadastroFormService: PreCadastroFormService) {}

  submitEvent() {
    if (this.isSamePassword()) {
      this.handleSubmit.emit(true);
    }
  }

  public get passwordCustomError() {
    return {
      required: 'Por favor, indique uma senha válida.',
      maxlength: 'Por favor, indique uma senha válida. Preencha uma senha com no máximo 255 caracteres',
      pattern: 'Preencha uma senha com no mínimo 6 caracteres, contendo letra maiúscula, minúscula, número e símbolo (Ex: !@#%$)'
    };
  }

  public isSamePassword() {
    const pwd = this.preCadastroFormService.formSenha.get('senha')?.value;
    const confirmPwd = this.preCadastroFormService.formSenha.get('confirmarSenha')?.value;
    
    return pwd === confirmPwd;
  }
}
