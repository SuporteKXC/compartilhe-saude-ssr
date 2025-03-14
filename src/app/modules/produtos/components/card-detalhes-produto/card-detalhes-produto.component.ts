import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParceiroPreco } from '../../../content/models/parceiro-preco.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';

@Component({
  selector: 'app-card-detalhes-produto',
  templateUrl: './card-detalhes-produto.component.html',
  styleUrls: ['./card-detalhes-produto.component.scss']
})
export class CardDetalhesProdutoComponent {
  @Input() data!: ParceiroPreco;

  @Output() cardProdutoPrecoId = new EventEmitter<number>();

  protected pathImg = environment.imgUrl;

  constructor(private router: Router) { }

  getImagem(data: ParceiroPreco) {
    const profissionalImagem = data.parceiroProfissional?.pathImagem;
    const estabelecimentoImagem = data.parceiroEstabelecimento?.pathImagem;

    if (data.parceiroProfissional) {
      return profissionalImagem ? this.pathImg + profissionalImagem : "";
    } else {
      return estabelecimentoImagem ? this.pathImg + estabelecimentoImagem : "";
    }
  }

  handleCardProdutoPrecoIdEvent() {
    this.cardProdutoPrecoId.emit(this.data.id);
  }

  navigateToParceirosDetalhes(data: ParceiroPreco): void {
    const idParceiro = data.parceiroProfissional ? data.parceiroProfissional.id : data.parceiroEstabelecimento?.id;

    const routePath = [
      'nossos-parceiros',
      'detalhes',
      idParceiro,
      parseToUrl(data.nome),
    ];

    this.router.navigate(
      routePath.filter(
        segment => Boolean(segment)
      )
    );
  }

  getFormaAtendimento(formaAtendimento: string) {
    const enumName = enumNameFromEnumValue(FormaAtendimentoEnum, formaAtendimento as FormaAtendimentoEnum);
    return parseToUrl(enumName);
  }
}
