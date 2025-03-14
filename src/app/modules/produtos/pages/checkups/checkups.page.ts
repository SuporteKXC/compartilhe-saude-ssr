import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImgAttr } from '../../../content/models/img-attr.model';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';

@Component({
  selector: 'app-checkups',
  templateUrl: './checkups.page.html',
  styleUrls: ['./checkups.page.scss']
})
export class CheckupsPage {
  private pathImage = environment.imgUrl;

  imgAttr: ImgAttr = {
    src: {
      mobile: `${this.pathImage}/PACOTE+DE+CHECK+UP2+-+mobile.jpg`,
      desktop: `${this.pathImage}/PACOTE+DE+CHECK+UP1+-+web.jpg`
    },
    alt: 'Pacotes de check-up',
    title: 'Pacotes de check-up'
  };

  get categorias() {
    return [
      enumNameFromEnumValue(CategoriaProduto, CategoriaProduto.PACOTE) as CategoriaProduto
    ];
  }
}
