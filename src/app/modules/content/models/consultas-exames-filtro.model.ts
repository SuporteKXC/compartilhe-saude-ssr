import { CategoriaProduto } from "../../admin/pages/gestao-produtos/enums/CategoriaProduto";

export interface ConsultasExamesFiltro {
    nome: string | null;
    tipo: CategoriaProduto | null;
}