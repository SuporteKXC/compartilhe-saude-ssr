import { Component } from '@angular/core';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';

@Component({
  selector: 'app-procedimentos',
  templateUrl: './procedimentos.page.html',
  styleUrls: ['./procedimentos.page.scss']
})
export class ProcedimentosPage {

  get categorias() {
    return [
      enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.PROCEDIMENTO) as CategoriaProduto
    ];
  }
}
