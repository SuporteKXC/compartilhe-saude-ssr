import { ParceiroEspecialidade } from "./parceiro-especialidade.model";
import { TipoEstabelecimento } from "./tipo-estabelecimento.model";

export interface ParceiroDestaqueResumo {
  id : number;
  nome: string;
  especialidades: ParceiroEspecialidade[];
  rqe: string;
  registroProfissional: string;
  pathImagem: string;
  ativo: boolean;
  tiposEstabelecimento: TipoEstabelecimento[];
}
