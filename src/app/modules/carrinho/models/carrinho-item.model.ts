import { ProdutoLocal } from '../../content/models/produto-local.model';

export interface CarrinhoItem {
  id: number | null;
  idProduto: number;
  localStorageId?: number;

  quantidade: number;

  nome: string;
  descricao: string;
  pathImagem: string;

  localProduto: ProdutoLocal;
}
