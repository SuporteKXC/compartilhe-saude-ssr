import { Cidade } from './cidade.model';

export interface Endereco {
  id?: number;
  logradouro?: string | null;
  numero?: string | null;
  complemento?: string | null;
  bairro?: string | null;
  cep?: string | null;
  cidade?: Cidade | null;
  siglaUf?: string | null;
}
