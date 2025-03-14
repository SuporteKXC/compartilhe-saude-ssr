import { Cidade } from "../../shared/models/endereco/cidade.model";
import { ParceiroEstabelecimentoDetalhado } from "./parceiro-estabelecimento-detalhado.model";
import { ParceiroProfissionalDetalhado } from "./parceiro-profissional-detalhado.model";

export interface ParceiroPreco {
  id: number;
  nome: string;
  formaAtendimento: string;
  parceiroProfissional?: ParceiroProfissionalDetalhado;
  parceiroEstabelecimento?: ParceiroEstabelecimentoDetalhado;
  cidade: Cidade;
  valorVista: number;
}
