import { ModalidadeParceiroEnum } from "../../enums/modalidade-parceiro.enum";
import { Endereco } from "../endereco/endereco.model";
import { PerguntasFrequentes } from "../pergunta-frequente.model";
import { LocalAtendimentoDetalhado } from "./local-atendimento-detalhado.model";
import { CategoriaParceiroEnum } from "src/app/modules/admin/pages/gestao-parceiros/enums/categoria-parceiro.enum";

export interface RedeCompartilhe {
  id : number;
  nomeParceiro: string;
  idCategoria: number;
  categoria: CategoriaParceiroEnum;
  unidadePropria: boolean;
  telefone: string;
  apresentarOnline: boolean;
  rqe: string;
  temProdutos: boolean;
  registroProfissional: string;
  pathImagem: string;
  ativo: boolean;
  whatsapp: string;
  linkedin: string;
  instagram: string;
  sobre: string;
  experiencia?: string;
  endereco: Endereco
  idadeAtendimento: string;
  locaisAtendimento: LocalAtendimentoDetalhado[];
  modalidade: ModalidadeParceiroEnum;
  convenios: string[];
  formasPagamento: string[];
  servicosOferecidos: string[];
  tiposEspecialidade: string[];
  formasAtendimento: string[];
  perguntasFrequentes: PerguntasFrequentes[];
}
