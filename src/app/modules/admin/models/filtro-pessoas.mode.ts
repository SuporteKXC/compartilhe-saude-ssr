import { EstadoCivil } from "../../shared/enums/estado-civil.enum";
import { ModalidadePessoaFisicaEnum } from "../../shared/enums/modalidade-pessoa-fisica.enum";
import { SexoBiologico } from "../../shared/enums/sexo-biologico.enum";
import { TipoClienteEnum } from "../../shared/enums/tipo-cliente.enum";
import { Cidade } from "../../shared/models/endereco/cidade.model";
import { FaixaEtaria } from "./faixa-etaria.model";

export interface FiltroPessoas {
  tipoCliente: TipoClienteEnum | null;
  texto: string | null;
  modalidade: ModalidadePessoaFisicaEnum | null;
  estado: string | null,
  estadoCivil: EstadoCivil | null;
  sexoBiologico: SexoBiologico | null;
  cidade: Cidade | null;
  faixaEtaria: FaixaEtaria | null;
  telefone?: string | null;
  contatoWhatsapp?: string | null;
}