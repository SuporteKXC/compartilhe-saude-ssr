import { FormaAtendimento } from '../../shared/models/parceiro/forma-atendimento.model';
import { LocalAtendimento } from '../../shared/models/parceiro/local-atendimento.model';
import { Parceiro } from './parceiro.model';
import { ParceiroEspecialidade } from '../../shared/models/parceiro/parceiro-especialidade.model';
import { SexoBiologico } from '../../shared/enums/sexo-biologico.enum';

export interface ParceiroProfissional extends Parceiro {
  cpf: string;
  registroProfissional: string;
  rqe: string | null;
  dataNascimento: string;
  idadeAtendimento: string;
  especialidades: ParceiroEspecialidade[];
  experiencia: string;
  locaisAtendimento: LocalAtendimento[];
  formasAtendimento: FormaAtendimento[];
  sexoBiologico: SexoBiologico | null,
}
