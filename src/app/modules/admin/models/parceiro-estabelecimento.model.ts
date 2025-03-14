import { Parceiro } from './parceiro.model';
import { TipoEstabelecimento } from '../../shared/models/parceiro/tipo-estabelecimento.model';

export interface ParceiroEstabelecimento extends Parceiro {
  cnpj: string | null;
  nomeContato: string | null;
  tiposEstabelecimento: TipoEstabelecimento[];
  parceiro: boolean;
}
