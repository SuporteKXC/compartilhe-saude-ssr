import { Endereco } from '../../shared/models/endereco/endereco.model';
import { DadosPessoais } from './dados-pessoais.model';

export interface Perfil {
  dadosPessoais: DadosPessoais;
  enderecos: Endereco[];
}
