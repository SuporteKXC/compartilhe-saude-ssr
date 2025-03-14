import { CategoriaPerguntasFrequentes } from "./categoria-pergunta-frequente.model";

export interface PerguntasFrequentes {
  id: number | null,
  pergunta: string | null,
  resposta: string | null,
  categorias: CategoriaPerguntasFrequentes[] | null;
  version?: number | null,
  index: number | null;
}
