import { FormaAtendimento } from "../../shared/models/parceiro/forma-atendimento.model";

export interface ParceiroProfissionalDetalhado {
  id: number;
  pathImagem: string;
  nome: string;
  registroProfissional: string;
  rqe: string;
  formaAtendimento?: FormaAtendimento[];
  especialidades: string[];
  servicos: string[]
}
