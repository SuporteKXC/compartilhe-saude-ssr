import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, AfterViewInit } from '@angular/core';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';
import { RedeCompartilhe } from 'src/app/modules/shared/models/parceiro/rede-compartilhe.model';
import { JoinStringPipe } from 'src/app/modules/shared/pipes/join-string.pipe';
import { Router } from '@angular/router';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { environment } from 'src/environments/environment';
import { MaskPipe } from 'src/app/modules/shared/pipes/mask.pipe';
import { filterParams } from '../../../shared/functions/util/filter-params.function';
import { Endereco } from 'src/app/modules/shared/models/endereco/endereco.model';
import { ModalidadeParceiroEnum } from 'src/app/modules/shared/enums/modalidade-parceiro.enum';
import { LocalAtendimentoDetalhado } from 'src/app/modules/shared/models/parceiro/local-atendimento-detalhado.model';

@Component({
  selector: 'app-card-nossos-parceiros',
  templateUrl: './card-nossos-parceiros.component.html',
  styleUrls: ['./card-nossos-parceiros.component.scss']
})
export class CardNossosParceirosComponent implements OnChanges, AfterViewInit {
  @Input() tooltipContent?: string;
  @Input() data!: RedeCompartilhe;
  @Input() filtroEspecialidade!: string | undefined;

  protected messageLink!: string;
  protected isOverflowing = false;
  protected hiddenText = true;

  protected numVisible = 1;
  protected numScroll = 1;
  protected overflow = false;
  protected imgUrl = environment.imgUrl;
  protected imageNotFound = false;

  public responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '1200px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(
    private linkWhatsappService: LinkWhatsappService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private joinStringPipe: JoinStringPipe,
    private maskPipe: MaskPipe
  ) { }

  ngOnChanges(): void {
    const servicos = new JoinStringPipe().transform(this.data.servicosOferecidos);
    const MESSAGE = `Olá, gostaria de informações sobre ${servicos.toLowerCase()} referente a ${this.data.nomeParceiro}`;

    this.messageLink = this.linkWhatsappService.gerarLink(MESSAGE);

    if (this.data.locaisAtendimento && this.data.formasAtendimento.includes(FormaAtendimentoEnum.ONLINE)) {
      this.data.locaisAtendimento.push({
        telefone: this.data.telefone,
      } as LocalAtendimentoDetalhado);

      if (this.data.apresentarOnline) {
        this.data.locaisAtendimento.sort((a, b) => a.id - b.id);
      }
    }
  }
  ngAfterViewInit(): void {
    this.hiddenText = !this.isPagante();
    this.cdr.detectChanges();
  }

  checkOverflow(element: ElementRef<HTMLElement>): void {
    const nativeElement = element.nativeElement;
    this.isOverflowing = nativeElement.scrollWidth > nativeElement.clientWidth;

    this.cdr.detectChanges();
  }

  navigateToDetalhes(data: RedeCompartilhe) {
    const routePath = [
      '/nossos-parceiros',
      'detalhes',
      data.id,
      parseToUrl(data.nomeParceiro),
    ];

    this.router.navigate(
      routePath.filter(
        segment => Boolean(segment)
      )
    );
  }

  get servicosOferecidos() {
    return this.joinStringPipe.transform(this.data.servicosOferecidos);
  }

  isPagante() {
    const enumName = enumNameFromEnumValue(ModalidadeParceiroEnum, ModalidadeParceiroEnum.CONNECT_FREE) as ModalidadeParceiroEnum;
    return this.data.modalidade !== enumName;
  }

  getFormaAtendimento(apresentarOnline: boolean) {
    const formaAtendimento = apresentarOnline ? FormaAtendimentoEnum.ONLINE : FormaAtendimentoEnum.PRESENCIAL;
    const enumName = enumNameFromEnumValue(FormaAtendimentoEnum, formaAtendimento);
    return parseToUrl(enumName);
  }

  getEndereco(endereco: Endereco) {
    return filterParams(endereco);
  }

  protected getTelefone(telefone: string) {
    telefone = this.maskPipe.transform(telefone, ['(99) 9999-9999', '(99) 99999-9999']);

    if (this.hiddenText) {
      return telefone.substring(0, 5).concat("...");
    } else {
      return telefone;
    }
  }
}

