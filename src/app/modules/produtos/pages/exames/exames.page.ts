import { Component } from '@angular/core';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.page.html',
  styleUrls: ['./exames.page.scss']
})
export class ExamesPage {

  get categorias() {
    return [
      enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.EXAME) as CategoriaProduto
    ];
  }
}
