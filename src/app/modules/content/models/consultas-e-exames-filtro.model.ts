import { Cidade } from "../../shared/models/endereco/cidade.model";
import { FormaAtendimentoEnum } from "../../shared/enums/forma-atendimento.enum";

export interface ConsultasEExamesDetalhesFiltro {
    cidade: Cidade | null;
    idParceiro: number | null;
    formaAtendimento: FormaAtendimentoEnum | null;
}
