import { StatusPedido } from '../../../pagamento/enums/status-pedido';

export interface Pedido {
  id: number;
  status: StatusPedido;
  valorTotal: number;
  nome: string;
  cpf: string;
  dataHoraInclusao: string;
}
