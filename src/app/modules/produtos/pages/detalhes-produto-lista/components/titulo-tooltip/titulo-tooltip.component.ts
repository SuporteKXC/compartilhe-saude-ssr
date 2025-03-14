import { Component, Input } from '@angular/core';
import { DetalhesProduto } from 'src/app/modules/content/models/detalhes-produto.model';

@Component({
  selector: 'app-titulo-tooltip',
  templateUrl: './titulo-tooltip.component.html',
  styleUrls: ['./titulo-tooltip.component.scss']
})
export class TituloTooltipComponent {
  @Input() data!: DetalhesProduto;

  protected isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
