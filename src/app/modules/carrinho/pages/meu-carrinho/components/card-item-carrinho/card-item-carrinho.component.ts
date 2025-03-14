import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarrinhoItem } from 'src/app/modules/carrinho/models/carrinho-item.model';
import { CarrinhoService } from 'src/app/modules/carrinho/services/carrinho.service';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-item-carrinho',
  templateUrl: './card-item-carrinho.component.html',
  styleUrls: ['./card-item-carrinho.component.scss'],
})
export class CardItemCarrinhoComponent {
  @Input() carrinhoItem!: CarrinhoItem;

  @Output() quantidadeChanged = new EventEmitter<number>();
  @Output() itemRemoved = new EventEmitter<boolean>();

  public imgLoaded = false;
  public itemDisabled = false;

  public get pathImage(): string {
    return `${environment.imgUrl + this.carrinhoItem.pathImagem}`;
  }

  constructor(private carrinhoService: CarrinhoService) {}

  public aumentarQuantidade() {
    if (this.carrinhoItem.localStorageId === undefined) return;

    this.itemDisabled = true;
    this.carrinhoService
      .increaseQuantityByLocalStorageId(this.carrinhoItem.localStorageId)
      .subscribe()
      .add(() => (this.itemDisabled = false));
  }

  public diminuirQuantidade() {
    if (this.carrinhoItem.localStorageId === undefined) return;

    this.itemDisabled = true;
    this.carrinhoService
      .decreaseQuantityByLocalStorageId(this.carrinhoItem.localStorageId)
      .subscribe()
      .add(() => (this.itemDisabled = false));
  }

  public removerItem(event?: KeyboardEvent) {
    if (
      this.carrinhoItem.localStorageId === undefined ||
      (event && !['Space', 'Enter'].includes(event.code))
    )
      return;

    this.itemDisabled = true;
    this.carrinhoService
      .removeByLocalStorageId(this.carrinhoItem.localStorageId)
      .subscribe()
      .add(() => (this.itemDisabled = false));
  }

  public checkEnumValue(forma: FormaAtendimentoEnum, expectedValue: string) {
    const formaValueToCompare = enumNameFromEnumValue(FormaAtendimentoEnum, expectedValue as FormaAtendimentoEnum);

    return forma as string == formaValueToCompare;
  }
}
