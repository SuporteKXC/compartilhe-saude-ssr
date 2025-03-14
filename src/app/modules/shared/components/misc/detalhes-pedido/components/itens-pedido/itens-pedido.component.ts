import { Component, Input } from '@angular/core';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';
import { ItemPedido } from 'src/app/modules/shared/models/pedido/item-pedido.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-itens-pedido',
  templateUrl: './itens-pedido.component.html',
  styleUrls: ['./itens-pedido.component.scss'],
})
export class ItensPedidoComponent {
  @Input() itens!: ItemPedido[];

  protected formaAtendimento = FormaAtendimentoEnum;

  public getPathImage(item: ItemPedido): string {
    return `${environment.imgUrl + item.pathImagem}`;
  }

  getFormaAtendimento(formaAtendimento: FormaAtendimentoEnum) {
    return enumNameFromEnumValue(FormaAtendimentoEnum, formaAtendimento);
  }
}
