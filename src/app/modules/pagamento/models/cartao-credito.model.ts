import { BandeiraCartao } from '../enums/bandeira-cartao';

export interface CartaoCredito {
  numero: string;
  nomeTitular: string;
  cvv: string;
  validade: string;
  qtdParcelas: number;
  bandeira: BandeiraCartao;
}
