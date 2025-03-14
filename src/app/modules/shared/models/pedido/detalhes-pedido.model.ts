import { FormaPagamento } from '../../../pagamento/enums/forma-pagamento';
import { StatusPedido } from '../../../pagamento/enums/status-pedido';
import { ItemPedido } from './item-pedido.model';

export interface DetalhesPedido {
  id: number;
  status: StatusPedido;
  valorTotal: number;
  dataHoraInclusao: string;
  itens: ItemPedido[];
  formaPagamento: FormaPagamento;
  valorParcela: number;
  qtdParcelas: number;
  dataHoraPagamento: string;
  nome: string;
  cpf: string;
}
