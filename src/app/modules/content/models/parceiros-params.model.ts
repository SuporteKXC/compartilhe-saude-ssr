import { CategoriaParceiroEnum } from '../../admin/pages/gestao-parceiros/enums/categoria-parceiro.enum';
import { PageableParams } from '../../shared/models/paginacao/pageable-params.model';

export interface ParceirosParams extends PageableParams {
  idCidade?: number;
  idEspecialidade?: number;
  idTipoEstabelecimento?: number;
  categoria?: CategoriaParceiroEnum;
}
