import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { TipoPlanoEnum } from '../../enum/tipo-plano.enum';
import { PlanoPrecoDetalhes } from '../../model/plano-preco.model';
import { ModalidadeParceiroEnum } from 'src/app/modules/shared/enums/modalidade-parceiro.enum';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';

@Component({
  selector: 'app-secao-planos-precos',
  templateUrl: './secao-planos-precos.component.html',
  styleUrls: ['./secao-planos-precos.component.scss']
})
export class SecaoPlanosPrecosComponent implements OnInit {
  private planosPrecos = environment.planosPrecos.mensal;

  protected modalidade = ModalidadeParceiroEnum;
  
  protected planosOptions!: PlanoPrecoDetalhes[];
  protected selectOptions = [
    { label: 'Mensal', value: TipoPlanoEnum.MENSAL },
    { label: 'Anual', value: TipoPlanoEnum.ANUAL }
  ];

  protected formAssinatura = this.fb.group({
    assinatura: this.fb.control<TipoPlanoEnum | null>(
      { value: TipoPlanoEnum.MENSAL, disabled: false },
      { validators: Validators.required }
    ),
  });

  constructor(private fb: FormBuilder, private whatsappService: LinkWhatsappService) { }

  ngOnInit(): void {
    this.updatePlanos();
    this.formAssinatura.valueChanges.subscribe(value => {
      
      if (value.assinatura) {
        const tipoAssinaturaKey = enumNameFromEnumValue(TipoPlanoEnum, value.assinatura);
        this.planosPrecos = environment.planosPrecos[TipoPlanoEnum[tipoAssinaturaKey]];
        this.updatePlanos();
      }
    });
  }

  getLink() {
    const mensagem = 'Olá, gostaria de mais informações sobre a assinatura do connect saúde.';
    const numero = '5527997513968';
    return this.whatsappService.gerarLink(mensagem, numero);
  }

  private updatePlanos(): void {
    this.planosOptions = [
      {
        ...this.planosPrecos.free,
        beneficios: [
          { nome: 'Perfil básico', incluso: true },
          { nome: 'Loja online disponível 24x7', incluso: false },
          { nome: 'Agendamento online', incluso: false },
          { nome: 'Pagamento online', incluso: false },
          { 
            nome: 'Campanha de trafego pago', 
            incluso: false, 
            tooltilp: 'Campanha de tráfego pago será realizada conforme estratégia para o perfil profissional.' 
          },
          { nome: 'SEO local', incluso: false },
          { nome: 'Remarketing', incluso: false },
          { nome: 'Otimização de conteúdo', incluso: false },
          { nome: 'Criação do perfil google meu negócio', incluso: false },
          { nome: 'Planejamento de conteúdo para rede sociais', incluso: false },
          { nome: 'Produção de criativos para redes sociais', incluso: false },
          { nome: 'Gerente de conta exclusivo', incluso: false },
          { nome: 'Suporte via whatsapp', incluso: false },
        ]
      },
      {
        ...this.planosPrecos.start,
        beneficios: [
          { nome: 'Perfil personalizado', incluso: true },
          { nome: 'Loja online disponível 24x7', incluso: true },
          { nome: 'Agendamento online', incluso: true },
          { nome: 'Pagamento online', incluso: true },
          { 
            nome: 'Campanha de trafego pago', 
            incluso: false, 
            tooltilp: 'Campanha de tráfego pago será realizada conforme estratégia para o perfil profissional.' 
          },
          { nome: 'SEO local', incluso: false },
          { nome: 'Remarketing', incluso: false },
          { nome: 'Otimização de conteúdo', incluso: false },
          { nome: 'Criação do perfil google meu negócio', incluso: false },
          { nome: 'Planejamento de conteúdo para rede sociais', incluso: false },
          { nome: 'Produção de criativos para redes sociais', incluso: false },
          { nome: 'Gerente de conta exclusivo', incluso: true },
          { nome: 'Suporte via whatsapp', incluso: true },
        ]
      },
      {
        ...this.planosPrecos.plus,
        beneficios: [
          { nome: 'Perfil personalizado', incluso: true },
          { nome: 'Loja online disponível 24x7', incluso: true },
          { nome: 'Agendamento online', incluso: true },
          { nome: 'Pagamento online', incluso: true },
          { 
            nome: 'Campanha de trafego pago', 
            incluso: true, 
            tooltilp: 'Campanha de tráfego pago será realizada conforme estratégia para o perfil profissional.' 
          },
          { nome: 'SEO local', incluso: true },
          { nome: 'Remarketing', incluso: true },
          { nome: 'Otimização de conteúdo', incluso: true },
          { nome: 'Criação do perfil google meu negócio', incluso: false },
          { nome: 'Planejamento de conteúdo para rede sociais', incluso: false },
          { nome: 'Produção de criativos para redes sociais', incluso: false },
          { nome: 'Gerente de conta exclusivo', incluso: true },
          { nome: 'Suporte via whatsapp', incluso: true },
        ]
      },
      {
        ...this.planosPrecos.max,
        beneficios: [
          { nome: 'Perfil personalizado', incluso: true },
          { nome: 'Loja online disponível 24x7', incluso: true },
          { nome: 'Agendamento online', incluso: true },
          { nome: 'Pagamento online', incluso: true },
          { 
            nome: 'Campanha de trafego pago', 
            incluso: true, 
            tooltilp: 'Campanha de tráfego pago será realizada conforme estratégia para o perfil profissional.' 
          },
          { nome: 'SEO local', incluso: true },
          { nome: 'Remarketing', incluso: true },
          { nome: 'Otimização de conteúdo', incluso: true },
          { nome: 'Criação do perfil google meu negócio', incluso: true },
          { nome: 'Planejamento de conteúdo para rede sociais', incluso: true },
          { nome: 'Produção de criativos para redes sociais', incluso: true },
          { nome: 'Gerente de conta exclusivo', incluso: true },
          { nome: 'Suporte via whatsapp', incluso: true },
        ]
      }
    ];
  }

  getOrderClass(plano: PlanoPrecoDetalhes) {
    if (plano.recomendado) {
      return 'flex-order-0';
    }
    if (plano.nome === "Free") {
      return 'flex-order-2';
    }
    return 'flex-order-1';
  }
}