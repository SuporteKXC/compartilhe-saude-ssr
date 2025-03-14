import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { RecaptchaEnterpriseService } from 'src/app/modules/shared/services/recaptcha-enterprise/recaptcha-enterprise.service';
import { environment } from 'src/environments/environment';
import { PreCadastroFormService } from '../../services/pre-cadastro-form/pre-cadastro-form.service';

@Component({
  selector: 'app-pre-cadastro',
  templateUrl: './pre-cadastro.page.html',
  styleUrls: ['./pre-cadastro.page.scss'],
})
export class PreCadastroPage {
  public isLoading = false;
  public pathImage = `${environment.imgUrl}/`;
  isPasswordForm = false;

  constructor(
    private fb: FormBuilder,
    protected preCadastroFormService: PreCadastroFormService,
    private usuarioService: UsuariosService,
    private router: Router,
    private recaptchaEnterpriseService: RecaptchaEnterpriseService,
  ) { }

  public nextForm() {
    if (this.preCadastroFormService.formUsuario.valid) {
        this.isLoading = true;
        this.recaptchaEnterpriseService.execute('HOMEPAGE')?.subscribe((token) => {
            const { formUsuario } = this.preCadastroFormService;
            this.usuarioService.validarExistente(
                token, formUsuario.get('cpf')?.getRawValue(), formUsuario.get('email')?.getRawValue())
                .subscribe(() => {
                    this.isPasswordForm = true;
                })
                .add(() => (this.isLoading = false));
    });
    }
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.recaptchaEnterpriseService.execute('HOMEPAGE')?.subscribe((token) => {
      const { formSenha, formUsuario } = this.preCadastroFormService;
      this.usuarioService
        .preCadastro({
          ...formSenha.getRawValue(),
          ...formUsuario.getRawValue(),
          token,
        })
        .subscribe(() => {
          this.preCadastroFormService.reset();
          this.router.navigate(['/usuarios', 'boas-vindas']);
        })
        .add(() => (this.isLoading = false));
    });
  }
}
