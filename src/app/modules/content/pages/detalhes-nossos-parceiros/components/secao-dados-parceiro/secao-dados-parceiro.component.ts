import { Component, Input, OnInit } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { CategoriaParceiroEnum } from 'src/app/modules/admin/pages/gestao-parceiros/enums/categoria-parceiro.enum';
import { LAPTOP_WIDTH_SIZE, TABLET_WIDTH_SIZE } from 'src/app/modules/shared/constants/device-size';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { filterParams } from 'src/app/modules/shared/functions/util/filter-params.function';
import { Endereco } from 'src/app/modules/shared/models/endereco/endereco.model';
import { RedeCompartilhe } from 'src/app/modules/shared/models/parceiro/rede-compartilhe.model';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';
import { WindowService } from 'src/app/modules/shared/services/window/window.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-secao-dados-parceiro',
  templateUrl: './secao-dados-parceiro.component.html',
  styleUrls: ['./secao-dados-parceiro.component.scss']
})
export class SecaoDadosParceiroComponent implements OnInit {
  @Input() formaAtendimento!: FormaAtendimentoEnum | null;
  @Input() detalhesParceiro!: RedeCompartilhe;

  protected pathImg = environment.imgUrl;
  protected imageNotFound = false;

  protected formaAtendimentoEnum = FormaAtendimentoEnum;
  protected categoriaParceiroEnum = CategoriaParceiroEnum;

  protected responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1400',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '992px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  protected numVisible = 1;
  protected numScroll = 1;

  get isSlider(): boolean {
    return this.detalhesParceiro.locaisAtendimento.length > this.numVisible;
  }

  get isOnline(): boolean {
    return this.detalhesParceiro.apresentarOnline || (this.formaAtendimento === this.formaAtendimentoEnum.ONLINE);
  }

  constructor(private window: WindowService, private whatsAppService: LinkWhatsappService) { }

  ngOnInit(): void {
    this.window.size$.subscribe(size => {
      const width = size.width;
      if (width > TABLET_WIDTH_SIZE) this.numVisible = 2;

      if (width > LAPTOP_WIDTH_SIZE) this.numVisible = 3;
    });
  }

  getEndereco(endereco?: Endereco) {
    if (!endereco) {
      const endereco: Endereco = {
        logradouro: this.detalhesParceiro.endereco.logradouro,
        numero: this.detalhesParceiro.endereco.numero,
        bairro: this.detalhesParceiro.endereco.bairro,
        cep: this.detalhesParceiro.endereco.cep,
        cidade: {
          nome: this.detalhesParceiro.endereco.cidade?.nome,
          siglaUf: this.detalhesParceiro.endereco.cidade?.siglaUf
        },
      };
      return endereco;
    }
    return filterParams(endereco);
  }

  getMensagem(nome: string, telefone?: string, url?: string) {
    const mensagem = `Olá, encontrei informações sobre ${nome} na Compartilhe Saúde, gostaria de mais detalhes sobre os serviços oferecidos.`;
    return this.whatsAppService.gerarLink(mensagem, telefone, url);
  }
}
