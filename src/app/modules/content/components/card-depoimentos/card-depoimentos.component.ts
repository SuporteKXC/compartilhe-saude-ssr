import { Component, Input } from '@angular/core';
import { CardDepoimento } from '../../models/card-depoimento.model';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.scss']
})
export class CardDepoimentosComponent {
  @Input() depoimento!: CardDepoimento;
}
