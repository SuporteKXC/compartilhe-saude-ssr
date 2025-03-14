import { StatusPedido } from 'src/app/modules/pagamento/enums/status-pedido';

export interface PedidoFiltro {
  texto: string | null;
  status: StatusPedido | null;

  dataInicial: string | null;
  dataFinal: string | null;
}
