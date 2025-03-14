import { ParceiroEspecialidade } from 'src/app/modules/shared/models/parceiro/parceiro-especialidade.model';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { Parceiro } from 'src/app/modules/admin/models/parceiro.model';
import { ParceiroSubcategoria } from 'src/app/modules/shared/models/parceiro/parceiro-subcategoria.model';

export interface NossosParceirosFiltro {
  cidade: Cidade | null;
  especialidade: ParceiroEspecialidade | null;
  parceiro: Parceiro |null;
  tipoEstabelecimento: ParceiroSubcategoria | null;
}
