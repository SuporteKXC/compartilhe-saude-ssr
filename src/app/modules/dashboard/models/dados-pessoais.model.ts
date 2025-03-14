import { EstadoCivil } from '../../shared/enums/estado-civil.enum';
import { RendaSalarioMinimo } from '../../shared/enums/renda-salario-minimo.enum';
import { SexoBiologico } from '../../shared/enums/sexo-biologico.enum';

export interface DadosPessoais {
  nome: string;
  cpf: string;
  contatoWhatsapp: string;
  email: string;
  dataNascimento: string;
  sexoBiologico: SexoBiologico | null;
  profissao: string | null;
  rendaSalarioMinimo: RendaSalarioMinimo | null;
  estadoCivil: EstadoCivil | null;
}
