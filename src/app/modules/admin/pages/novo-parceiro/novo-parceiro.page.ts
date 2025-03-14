import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RadioOption } from 'src/app/modules/shared/models/radio-option.model';

@Component({
  selector: 'app-novo-parceiro',
  templateUrl: './novo-parceiro.page.html',
  styleUrls: ['./novo-parceiro.page.scss']
})
export class NovoParceiroPage {
  public options: RadioOption<string>[] = [
    {
      label: 'Estabelecimento',
      value: 'estabelecimento',
    },
    {
      label: 'Profissional de saúde',
      value: 'profissional',
    },
  ];

  public formTipoParceiro = this.fb.group({
    tipo: this.fb.control<string | null>(null, { validators: Validators.required }),
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  get tipoParceiro() {
    return this.formTipoParceiro.get('tipo');
  }

  onSubmit() {
    this.router.navigate(['/', 'admin', 'dashboard', 'rede-compartilhe', 'cadastrar', this.tipoParceiro?.value]);
  }
}
