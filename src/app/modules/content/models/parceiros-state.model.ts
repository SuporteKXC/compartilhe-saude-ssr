import { ParceiroEspecialidade } from "../../shared/models/parceiro/parceiro-especialidade.model";
import { Cidade } from "../../shared/models/endereco/cidade.model";
import { Parceiro } from "../../admin/models/parceiro.model";
import { ParceiroSubcategoria } from "../../shared/models/parceiro/parceiro-subcategoria.model";

export interface ParceiroState {
    cidade?: Cidade;
    especialidade?: ParceiroEspecialidade;
    tipoEstabelecimento?: ParceiroSubcategoria;
    parceiro?: Parceiro;
}
