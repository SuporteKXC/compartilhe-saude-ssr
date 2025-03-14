import { Component } from '@angular/core';
import { FormCadastrarProdutoService } from 'src/app/modules/admin/services/form-cadastrar-produto/form-cadastrar-produto.service';
import { RadioOption } from 'src/app/modules/shared/models/radio-option.model';

@Component({
  selector: 'app-form-prioridade-produto',
  templateUrl: './form-prioridade-produto.component.html',
  styleUrls: ['./form-prioridade-produto.component.scss'],
})
export class FormPrioridadeProdutoComponent {
  public options: RadioOption<number>[] = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
  ];

  constructor(protected formCadastrarProdutoService: FormCadastrarProdutoService) {}
}
