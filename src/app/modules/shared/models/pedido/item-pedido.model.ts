import { ProdutoLocal } from '../../../content/models/produto-local.model';

export interface ItemPedido {
  quantidade: number;
  nome: string;
  descricao: string;
  valorTotal?: number;
  localProduto: ProdutoLocal;
  pathImagem?: string;
}
