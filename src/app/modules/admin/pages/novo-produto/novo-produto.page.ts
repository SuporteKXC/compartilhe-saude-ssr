import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { selectOptionsFromEnum } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { RadioOption } from 'src/app/modules/shared/models/radio-option.model';
import { CategoriaProduto } from '../gestao-produtos/enums/CategoriaProduto';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/modules/shared/services/navigation/navigation.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.page.html',
  styleUrls: ['./novo-produto.page.scss'],
})
export class NovoProdutoPage {
  public options: RadioOption<string>[] = selectOptionsFromEnum(CategoriaProduto);

  public formTipo = this.fb.group({
    tipo: this.fb.control<string | null>(
      { value: null, disabled: false },
      { validators: Validators.required }
    ),
  });

  get controlTipo() {
    return this.formTipo.get('tipo');
  }

  protected enabledPaths = [
    'Consulta',
    'Exame',
    'Pacote',
    'Procedimento',
    'Cirurgia',
    'Odontologia'
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private navigation: NavigationService
  ) {}

  onSubmit() {
    const categoria = this.controlTipo?.value;
    const path = '/admin/dashboard/produtos-compartilhe/cadastrar';

    this.navigation.setState({ categoria });
    this.router.navigate([path, parseToUrl(categoria)]);
  }
}
