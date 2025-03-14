import { ItemPedido } from '../../shared/models/pedido/item-pedido.model';
import { FormaPagamento } from '../enums/forma-pagamento';

export interface PedidoCriacao {
  itens: ItemPedido[];
  formaPagamento: FormaPagamento;
  cartaoCredito: { paymentToken: string; qtdParcelas: number } | null;
  valorTotal: number;
}
