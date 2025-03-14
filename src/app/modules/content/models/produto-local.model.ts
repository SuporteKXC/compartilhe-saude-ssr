import { FormaAtendimentoEnum } from '../../shared/enums/forma-atendimento.enum';
import { Endereco } from '../../shared/models/endereco/endereco.model';

export interface ProdutoLocal {
  id: number;
  idParceiroEstabelecimento: number;
  nomeEstabelecimento: string;
  idParceiroProfissional?: number;
  nomeProfissional: string;
  especialidadesProfissional: string[]
  registroProfissional: string;
  endereco: Endereco;
  valorVista: number;
  valorReferencia: number;
  percentualDesconto: number;
  formaAtendimento: FormaAtendimentoEnum;
}
