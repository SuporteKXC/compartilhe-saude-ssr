import { CategoriaProduto } from "src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto";

export interface ProdutoLabel {
  icon: string;
  label: string;
  categoria?: CategoriaProduto;
}