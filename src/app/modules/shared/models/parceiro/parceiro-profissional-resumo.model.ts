import { FormaAtendimento } from "./forma-atendimento.model";

export interface ParceiroProfissionalResumo {
    id: number;
    nome: string;
    formasAtendimento: FormaAtendimento[];
}
