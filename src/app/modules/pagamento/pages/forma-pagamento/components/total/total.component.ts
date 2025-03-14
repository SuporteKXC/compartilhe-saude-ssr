import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrinhoService } from 'src/app/modules/carrinho/services/carrinho.service';
import { FormaPagamento } from 'src/app/modules/pagamento/enums/forma-pagamento';
import { PagamentoService } from 'src/app/modules/pagamento/services/pagamento/pagamento.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
})
export class TotalComponent {
  carrinhoValorTotal$!: Observable<number>;

  FormaPagamento = FormaPagamento;

  @Input() qtdParcelas!: number;
  @Input() formaPagamento?: FormaPagamento;
  @Input() botaoHabilitado = false;

  @Output() finalizarCompra = new EventEmitter<boolean>();

  constructor(
    private carrinhoService: CarrinhoService,
    private pagamentoService: PagamentoService
  ) {
    this.carrinhoValorTotal$ = this.carrinhoService.getTotalCarrinhoAndUpdates();
  }

  public getTaxaParcelamento(valor: number): number {
    return this.pagamentoService.getTaxaParcelamento(valor, this.qtdParcelas);
  }
}
