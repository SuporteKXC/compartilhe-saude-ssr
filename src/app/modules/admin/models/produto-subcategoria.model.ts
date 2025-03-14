import { CategoriaProduto } from "../pages/gestao-produtos/enums/CategoriaProduto";

export interface ProdutoSubcategoria {
   id: number;
   categoria: CategoriaProduto;
   descricao: string;
}