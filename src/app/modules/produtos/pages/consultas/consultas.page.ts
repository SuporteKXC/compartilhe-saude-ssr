import { Component } from '@angular/core';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss']
})
export class ConsultasPage {

  get categorias() {
    return [
      enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.CONSULTA) as CategoriaProduto
    ];
  }
}
