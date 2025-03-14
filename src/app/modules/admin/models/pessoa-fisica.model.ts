import { EstadoCivil } from "src/app/modules/shared/enums/estado-civil.enum";
import { SexoBiologico } from "src/app/modules/shared/enums/sexo-biologico.enum";
import { ModalidadePessoaFisicaEnum } from "../../shared/enums/modalidade-pessoa-fisica.enum";
import { RendaSalarioMinimo } from "src/app/modules/shared/enums/renda-salario-minimo.enum";
import { Endereco } from "../../shared/models/endereco/endereco.model";
import { ModalidadePessoaJuridicaEnum } from "../../shared/enums/modalidade-pessoa-juridica.enum";

export interface PessoaFisica {
  id: number | null;
  version: number | null;
  nome: string;
  cpf: string;
  contatoWhatsapp: string;
  email: string;
  dataNascimento: string;
  sexoBiologico: SexoBiologico | null;
  estadoCivil: EstadoCivil | null;
  profissao: string | null;
  modalidade: ModalidadePessoaFisicaEnum | ModalidadePessoaJuridicaEnum | null;
  rendaSalarioMinimo: RendaSalarioMinimo | null;
  enderecos: Endereco[] | null;
}