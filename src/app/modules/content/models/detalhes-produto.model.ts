import { Produto } from './produto.model';
import { ProdutoLocal } from './produto-local.model';
import { PerguntasFrequentes } from '../../shared/models/pergunta-frequente.model';

export interface DetalhesProduto extends Produto {
  descricao: string;
  indicacao: string;
  locais: ProdutoLocal[];
  produtosInteresse: Produto[];
  ordem: number;
  perguntasFrequentes: PerguntasFrequentes[]
}
