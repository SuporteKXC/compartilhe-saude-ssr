import { Endereco } from "../endereco/endereco.model";
import { LocalAtendimento } from "./local-atendimento.model";

export interface LocalAtendimentoDetalhado extends LocalAtendimento {

  endereco: Endereco | null;
  telefone: string;
}