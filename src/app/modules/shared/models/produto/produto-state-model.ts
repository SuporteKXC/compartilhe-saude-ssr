import { FormaAtendimentoEnum } from "../../enums/forma-atendimento.enum";
import { Cidade } from "../endereco/cidade.model";


export interface ProdutoState {
    idParceiro: number | null;
    formaAtendimento?: FormaAtendimentoEnum | null,
    cidade: Cidade | null;
}