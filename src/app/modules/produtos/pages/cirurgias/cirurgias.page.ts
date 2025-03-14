import { Component } from '@angular/core';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';

@Component({
  selector: 'app-cirurgias',
  templateUrl: './cirurgias.page.html',
  styleUrls: ['./cirurgias.page.scss']
})
export class CirurgiasPage {
  
  get categorias() {
    return [
      enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.CIRURGIA) as CategoriaProduto
    ];
  }
}
