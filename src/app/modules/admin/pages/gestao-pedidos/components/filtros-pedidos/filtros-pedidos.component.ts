import { Component, EventEmitter, Output } from '@angular/core';
import { StatusPedido } from 'src/app/modules/pagamento/enums/status-pedido';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { FormFiltroGestaoPedidoService } from '../../services/form-filtro-gestao-pedido/form-filtro-gestao-pedido.service';

@Component({
  selector: 'app-filtros-pedidos',
  templateUrl: './filtros-pedidos.component.html',
  styleUrls: ['./filtros-pedidos.component.scss'],
})
export class FiltrosPedidosComponent {
  @Output() shouldSearchAgain = new EventEmitter<void>();

  public get formFiltro() {
    return this.formFiltroGestaoPedido.group;
  }

  public get maxDate(): Date {
    return new Date();
  }

  public statusOptions: SelectOption<StatusPedido>[] = [
    { label: 'Pago', value: StatusPedido.PAGO },
    { label: 'Aguardando Pagamento', value: StatusPedido.AGUARDA_PAGAMENTO },
    { label: 'Expirado', value: StatusPedido.EXPIRADO },
  ];

  constructor(private formFiltroGestaoPedido: FormFiltroGestaoPedidoService) {}
}
