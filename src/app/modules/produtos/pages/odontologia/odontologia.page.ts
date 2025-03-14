import { Component } from '@angular/core';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';

@Component({
  selector: 'app-odontologia-page',
  templateUrl: './odontologia.page.html',
  styleUrls: ['./odontologia.page.scss']
})
export class OdontologiaPage {
  get categorias() {
    return [
      enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.ODONTOLOGIA) as CategoriaProduto
    ];
  }
}
