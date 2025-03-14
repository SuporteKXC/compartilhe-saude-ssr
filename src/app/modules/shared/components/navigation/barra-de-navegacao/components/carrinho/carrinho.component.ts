import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarrinhoService } from 'src/app/modules/carrinho/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  @Input() severity: 'primary' | 'secondary' = 'primary';

  @Output() handleClick = new EventEmitter<void>();

  public totalItems?: number = undefined;

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.carrinhoService.getTotalItemsAndUpdates().subscribe((total) =>
      (this.totalItems = total));
  }

  handleClickEvent(): void {
    this.handleClick.emit();
  }
}
