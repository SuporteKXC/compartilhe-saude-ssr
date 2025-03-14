import { DetalhesProduto } from "../../content/models/detalhes-produto.model";
import { Preco } from "../../shared/models/produto/preco.model";

export interface ProdutoAdmin extends DetalhesProduto {
  observacao: string;
  precos: Preco[];
  version: number;
  ativo: boolean;
}
