import { CategoriaParceiroEnum } from '../enums/categoria-parceiro.enum';

export interface ParceiroFiltro {
  nome: string | null;
  categoria: CategoriaParceiroEnum[] | null;
  descricaoSubcategoria: string[] | null;
  ativo: boolean | null;
}
