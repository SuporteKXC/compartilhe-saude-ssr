import { ProdutoSubcategoria } from "../../admin/models/produto-subcategoria.model";
import { CategoriaProduto } from "../../admin/pages/gestao-produtos/enums/CategoriaProduto";

export interface Produto {
  id: number;
  nome: string;
  resumo: string;
  preparo: string;
  pathImagem: string;
  categoria: CategoriaProduto;
  subcategoria: ProdutoSubcategoria;
}
