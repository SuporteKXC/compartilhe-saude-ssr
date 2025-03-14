import { CategoriaProduto } from "../../admin/pages/gestao-produtos/enums/CategoriaProduto";
import { FormaAtendimentoEnum } from "../../shared/enums/forma-atendimento.enum";

export interface ProdutoFiltro {
    nome?: string | null;
    categoria?: CategoriaProduto[];
    idParceiro?: number | null;
    idCidade?: number | null;
    formaAtendimento?: FormaAtendimentoEnum | null;
}