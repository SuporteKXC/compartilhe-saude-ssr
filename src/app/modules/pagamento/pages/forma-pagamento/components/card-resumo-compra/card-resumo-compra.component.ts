import { Component, Input } from '@angular/core';
import { CarrinhoItem } from 'src/app/modules/carrinho/models/carrinho-item.model';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-resumo-compra',
  templateUrl: './card-resumo-compra.component.html',
  styleUrls: ['./card-resumo-compra.component.scss']
})
export class CardResumoCompraComponent {
  @Input() data!: CarrinhoItem;
  
  protected pathImage = environment.imgUrl;
  protected formaAtendimento = FormaAtendimentoEnum;

  getFormaAtendimento(formaAtendimento: FormaAtendimentoEnum) {
    return enumNameFromEnumValue(FormaAtendimentoEnum, formaAtendimento);
  }
}
