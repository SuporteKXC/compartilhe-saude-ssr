import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateTime, Duration } from 'luxon';
import { PASSWORD_PATTERN, TELEFONE_PATTERN } from 'src/app/modules/shared/constants/patterns';
import { cpfValidator } from 'src/app/modules/shared/validators/cpf-validator/cpf-validator';
import { dateValidator } from 'src/app/modules/shared/validators/date-validator/date-validator';
import { futureDateValidator } from 'src/app/modules/shared/validators/future-date-validator/future-date-validator';
import { pastDateValidator } from 'src/app/modules/shared/validators/past-date-validator/past-date-validator';

@Injectable({
  providedIn: 'root'
})
export class PreCadastroFormService {

  public formUsuario = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.maxLength(255)]],
    contatoWhatsapp: ['', [Validators.required, Validators.pattern(TELEFONE_PATTERN)]],
    cpf: ['', [Validators.required, cpfValidator]],
    dataNascimento: [
      '',
      [
        Validators.required,
        dateValidator,
        futureDateValidator,
        pastDateValidator({ notBefore: DateTime.now().minus(Duration.fromObject({ years: 150 })) }),
      ],
    ],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
    aceiteTermo: [false, [Validators.requiredTrue]]
  });

  public formSenha = this.fb.nonNullable.group({
    senha: [
      '', 
      [
        Validators.required, 
        Validators.pattern(PASSWORD_PATTERN),
        Validators.maxLength(255)
      ]
    ],
    confirmarSenha: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  reset() {
    this.formUsuario.reset();
    this.formSenha.reset();
  }
}
