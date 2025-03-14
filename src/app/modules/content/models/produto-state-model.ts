import { FormaAtendimentoEnum } from "../../shared/enums/forma-atendimento.enum";
import { Cidade } from "../../shared/models/endereco/cidade.model";

export interface ProdutoState {
    idParceiro?: number | null;
    formaAtendimento?: FormaAtendimentoEnum | null,
    cidade?: Cidade | null;
    categoria?: string;
}