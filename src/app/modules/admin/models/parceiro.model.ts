import { Endereco } from '../../shared/models/endereco/endereco.model';
import { CategoriaParceiroEnum } from '../pages/gestao-parceiros/enums/categoria-parceiro.enum';
import { ParceiroServico } from '../../shared/models/parceiro/parceiro-servico.model';
import { ModalidadeParceiroEnum } from '../../shared/enums/modalidade-parceiro.enum';
import { TipoContaEnum } from '../../shared/enums/tipo-conta.enum';
import { FormaPagamento } from '../../pagamento/enums/forma-pagamento';
import { Convenio } from '../../shared/models/parceiro/convenio.model';
import { Banco } from '../../shared/models/parceiro/banco.model';
import { PerguntasFrequentes } from '../../shared/models/pergunta-frequente.model';

export interface Parceiro {
  id?: number | null;
  nome: string;
  unidadePropria: boolean;
  telefone: string | null;
  email: string | null;
  pathImagem: string | null;
  ativo: boolean;
  sobre: string,
  whatsapp: string,
  linkedin: string,
  instagram: string,
  destaque: boolean;
  endereco: Endereco;
  categoria: CategoriaParceiroEnum;
  servicos: ParceiroServico[];
  sellerId?: string | null;
  banco: Banco | null;
  tipoConta: TipoContaEnum | null;
  agencia: string | null;
  agenciaDigito: string | null;
  conta: string | null;
  contaDigito: string | null;
  version?: number | null;
  modalidade: ModalidadeParceiroEnum | null;
  formasPagamento: FormaPagamento[];
  convenios: Convenio[];
  perguntasFrequentes: PerguntasFrequentes[];
}
