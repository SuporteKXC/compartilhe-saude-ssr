import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormaPagamento } from 'src/app/modules/pagamento/enums/forma-pagamento';
import { RadioOption } from 'src/app/modules/shared/models/radio-option.model';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { CarrinhoService } from 'src/app/modules/carrinho/services/carrinho.service';
import { CurrencyPipe } from '@angular/common';
import { CartaoCreditoFormService } from 'src/app/modules/pagamento/services/cartao-credito-form/cartao-credito-form.service';
import {
  BandeiraCartao,
  getBandeiraCartaoFromNumeroCartao,
} from 'src/app/modules/pagamento/enums/bandeira-cartao';
import { PagamentoService } from 'src/app/modules/pagamento/services/pagamento/pagamento.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-radio-panel-option-cartao-credito',
  templateUrl: './radio-panel-option-cartao-credito.component.html',
  styleUrls: ['./radio-panel-option-cartao-credito.component.scss'],
})
export class RadioPanelOptionCartaoCreditoComponent implements OnInit, OnDestroy {
  @Input() option!: RadioOption<FormaPagamento>;
  @Input() isSelected = false;
  @Input() isError = false;

  public bandeiras = [
    { nome: 'Visa', imgPath: '/assets/images/pagamento/visa-brand.png' },
    { nome: 'MasterCard', imgPath: '/assets/images/pagamento/mastercard-brand.png' },
    { nome: 'Elo', imgPath: '/assets/images/pagamento/elo-brand.png' },
    { nome: 'Hipercard', imgPath: '/assets/images/pagamento/hipercard-brand.png' },
    { nome: 'American Express', imgPath: '/assets/images/pagamento/american-express-brand.png' },
  ];

  public parcelamentoOptions!: SelectOption<number>[];

  public get cartaoCreditoFormGroup(): FormGroup {
    return this.cartaoCreditoFormService.group;
  }

  public get numeroCartaoCustomErrors() {
    return {
      invalidCreditCard: 'Digite um número de cartão válido',
      invalidCardBrand: 'Bandeira não aceita',
    };
  }

  public get titularCartaoCustomErrors() {
    return {
      minlength: 'Digite o nome completo do titular do cartão',
    };
  }

  public get validadeCustomErrors() {
    return {
      invalidDate: 'Digite uma data válida',
    };
  }

  public get cvvCustomErrors() {
    return {
      minlength: `Digite um CVV válido`,
    };
  }

  public get cardNumberMask() {
    return this.cardBrand === BandeiraCartao.AMERICAN_EXPRESS
      ? '9999 999999 99999'
      : '9999 9999 9999 9999';
  }

  public get cvvMask() {
    // para que quando o usuário copiar um cartão, a máscara seja aplicada imediatamente
    this.cartaoCreditoFormGroup.get('numero')?.updateValueAndValidity({ onlySelf: true });

    return this.cardBrand === BandeiraCartao.AMERICAN_EXPRESS ? '9999' : '999';
  }

  // ### Getters para os inputs do Silent Order Post da Cielo ###

  public get cardNumber(): string {
    return this.cartaoCreditoFormService.parsedData.numero;
  }

  public get cardHolderName(): string {
    return this.cartaoCreditoFormService.parsedData.nomeTitular;
  }

  public get cardExpirationDate(): string {
    return this.cartaoCreditoFormService.parsedData.validade;
  }

  public get cardCvv(): string {
    return this.cartaoCreditoFormService.parsedData.cvv;
  }

  private get cardBrand(): BandeiraCartao {
    return getBandeiraCartaoFromNumeroCartao(this.cartaoCreditoFormGroup.get('numero')?.value);
  }

  constructor(
    private cartaoCreditoFormService: CartaoCreditoFormService,
    private carrinhoService: CarrinhoService,
    private pagamentoService: PagamentoService,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit(): void {
    this.carrinhoService
      .getTotalCarrinhoAndUpdates()
      .subscribe((total) => this.buildParcelamentoOptions(total));
  }

  ngOnDestroy(): void {
    this.cartaoCreditoFormService.unsubscribeFromValueChanges();
  }

  private buildParcelamentoOptions(total: number): void {
    const options: SelectOption<number>[] = [];

    for (let qtdParcelas = 1; qtdParcelas <= environment.numeroParcelas; qtdParcelas++) {
      const valorParcela = this.pagamentoService.getValorParcela(total, qtdParcelas);

      const option: SelectOption<number> = {
        label: `${qtdParcelas}x ${this.currencyPipe.transform(valorParcela)} ${
          qtdParcelas > 1 ? 'com juros' : 'sem juros'
        }`,
        value: qtdParcelas,
      };

      options.push(option);
    }

    this.parcelamentoOptions = options;
  }
}
