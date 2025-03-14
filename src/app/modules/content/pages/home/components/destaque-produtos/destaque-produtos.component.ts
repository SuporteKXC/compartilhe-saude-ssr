import { Component, OnInit } from '@angular/core';
import { BannerDestaqueProdutoTexto } from './models/banner-destaque-produto-texto.model';
import { Router } from '@angular/router';
import { PRODUTOS_DYNAMIC_ROUTES } from 'src/app/modules/shared/constants/produtos.constants';
import { getDynamicPath } from 'src/app/modules/shared/models/card-dynamic-routes.model';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-destaque-produtos',
  templateUrl: './destaque-produtos.component.html',
  styleUrls: ['./destaque-produtos.component.scss'],
})
export class DestaqueProdutosComponent implements OnInit {
  protected randomText!: BannerDestaqueProdutoTexto;
  protected randomNumber = Math.floor(Math.random() * 3) + 1;
  protected imageSrc!: string;
  protected pathImage = environment.imgUrl;

  private texts: BannerDestaqueProdutoTexto[] = [
    {
      title: 'Descontos exclusivos e pagamento facilitado!',
      subTitle:
        'Aqui você tem acesso à mais de 45 especialidades médicas. Contrate sua consulta online.',
      buttonLabel: 'Acessar consultas',
      imgDescription: 'Um homem cumprimentando uma mulher que está sorrindo.',
      imgLink: "/BANNER+CONSULTAS.png",
      categoria: CategoriaProduto.CONSULTA,
    },
    {
      title: 'Marcar seus exames na Compartilhe Saúde é muito simples!',
      subTitle:
        'Contrate seus exames de forma rápida e fácil. Temos parcerias com laboratórios, clínicas e hospitais de confiança, aqui você encontra o que precisa.',
      buttonLabel: 'Acessar exames',
      imgDescription: 'Equipamento de ultrassom mostrando um exame. ',
      imgLink: "/BANNER+EXAMES.png",
      categoria: CategoriaProduto.EXAME,
    },
    {
      title: 'Cuide da sua saúde de forma preventiva com check-ups completos!',
      subTitle:
        'Aqui, os cuidados começam de forma preventiva, conheça nossos pacotes de check-up e invista na sua saúde.',
      buttonLabel: 'Acessar check-ups',
      imgDescription: 'Mulher de cabelos grisalhos, aparentando ter mais de 40 anos, com um olhar esperançoso. ',
      imgLink: "/BANNER+CHECK-UPS.png",
      categoria: CategoriaProduto.PACOTE,
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.randomText = this.texts[this.randomNumber - 1];
  }

  navigateToProdutoLista(categoriaEnum: CategoriaProduto): void {
    const categoria = enumNameFromEnumValue(CategoriaProduto, categoriaEnum);
    this.router.navigate([
      getDynamicPath(PRODUTOS_DYNAMIC_ROUTES, categoria),
    ]);
  }
}
