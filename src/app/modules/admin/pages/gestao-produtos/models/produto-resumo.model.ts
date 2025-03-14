import { ProdutoSubcategoria } from "../../../models/produto-subcategoria.model";
import { CategoriaProduto } from "../enums/CategoriaProduto";

export interface ProdutoResumo {
    id: number;
    nome: string;
    categoria: CategoriaProduto;
    subcategoria?: ProdutoSubcategoria;
    ativo?: boolean;
}
