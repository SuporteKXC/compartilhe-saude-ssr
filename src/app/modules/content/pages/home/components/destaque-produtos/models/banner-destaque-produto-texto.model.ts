import { CategoriaProduto } from "src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto";

export interface BannerDestaqueProdutoTexto {
  title: string;
  subTitle: string;
  buttonLabel: string;
  imgDescription: string;
  imgLink: string;
  categoria: CategoriaProduto;
}
