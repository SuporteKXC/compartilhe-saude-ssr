import { ModalidadePessoaFisicaEnum } from "../../shared/enums/modalidade-pessoa-fisica.enum";
import { ModalidadePessoaJuridicaEnum } from "../../shared/enums/modalidade-pessoa-juridica.enum";
import { Endereco } from "../../shared/models/endereco/endereco.model";

export interface PessoaJuridica {
    id: number | null;
    version: number | null;
    nome: string;
    cnpj: string;
    telefone: string;
    email: string;
    pessoaDeContato: string | null;
    modalidade: ModalidadePessoaFisicaEnum | ModalidadePessoaJuridicaEnum | null;
    enderecos: Endereco[] | null;
  }