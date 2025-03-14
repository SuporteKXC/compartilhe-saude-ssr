import { StatusPedido } from '../enums/status-pedido';

export interface PedidoDetalhePix {
  status: StatusPedido;
  qrCode: string;
  dataHoraExpiracao: string;
  valorTotal: number;
}
