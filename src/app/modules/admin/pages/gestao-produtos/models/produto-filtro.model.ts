import { CategoriaProduto } from "../enums/CategoriaProduto";

export interface ProdutoFiltro {
    nome: string | null;
    categoria: CategoriaProduto[] | null;
    descricaoSubcategoria: string[] | null;
    ativo: boolean | null
}