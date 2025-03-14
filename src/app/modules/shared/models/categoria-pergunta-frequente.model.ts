import { CategoriaPerguntasFrequentesEnum } from "../../shared/enums/categoria-perguntas-frequentes.enum";

export interface CategoriaPerguntasFrequentes {
  id: number | null,
  idPerguntaFrequente: number | null,
  categoria: CategoriaPerguntasFrequentesEnum
}
