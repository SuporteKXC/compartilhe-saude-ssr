import { FormaAtendimento } from "../parceiro/forma-atendimento.model";
import { LocalAtendimento } from "../parceiro/local-atendimento.model";
import { ParceiroProfissionalResumo } from "../parceiro/parceiro-profissional-resumo.model";

export interface Preco {
    id: number | null;
    parceiroProfissional: ParceiroProfissionalResumo | null;
    localAtendimento: LocalAtendimento | null;
    formaAtendimento: FormaAtendimento | null;
    valorReferencia: number | null;
    valorVista: number | null;
    valorRepasse: number | null;
    valorComissao: number | null;
    percentualDesconto: number | null;
    index: number | null;
  }
