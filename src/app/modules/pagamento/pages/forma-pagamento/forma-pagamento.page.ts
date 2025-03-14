import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CartaoCreditoFormService } from '../../services/cartao-credito-form/cartao-credito-form.service';
import { PedidoCriacao } from '../../models/pedido-criacao.model';
import { FormaPagamento } from '../../enums/forma-pagamento';
import { catchError, firstValueFrom, of } from 'rxjs';
import { CarrinhoItem } from 'src/app/modules/carrinho/models/carrinho-item.model';
import { CarrinhoService } from 'src/app/modules/carrinho/services/carrinho.service';
import { Router } from '@angular/router';
import { PedidoService } from '../../../shared/services/pedido/pedido.service';
import { PagamentoService } from '../../services/pagamento/pagamento.service';
import { SilentOrderPostService } from 'src/app/modules/shared/services/silent-order-post/silent-order-post.service';
import { environment } from 'src/environments/environment';
import {
  isHttpErrorResponse,
  isServerError,
} from 'src/app/modules/shared/functions/error-handling/http-error-response';
import { ItemPedido } from 'src/app/modules/shared/models/pedido/item-pedido.model';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.page.html',
  styleUrls: ['./forma-pagamento.page.scss'],
})
export class FormaPagamentoPage implements OnInit {
  public carrinho!: CarrinhoItem[];

  public formaPagamento?: FormaPagamento;

  public loadingModalVisible = false;

  public erroCartaoCredito = false;

  public get botaoFinalizarCompraHabilitado(): boolean {
    return (
      this.formaPagamento === FormaPagamento.PIX ||
      (this.formaPagamento === FormaPagamento.CARTAO_CREDITO &&
        this.cartaoCreditoFormService.group.valid)
    );
  }

  public get qtdParcelas(): number {
    return this.cartaoCreditoFormService.parsedData.qtdParcelas;
  }
  
  private name = environment.name;

  constructor(
    private cartaoCreditoFormService: CartaoCreditoFormService,
    private pedidoService: PedidoService,
    private pagamentoService: PagamentoService,
    private carrinhoService: CarrinhoService,
    private silentOrderPostService: SilentOrderPostService,
    private router: Router,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.plataformId)) {
      this.carrinhoService.getCarrinhoAndUpdates().subscribe({
        next: (item) => {
          this.carrinho = item;

          this.carrinhoService.getTotalItems().subscribe((total) => {
            if (total === 0) this.router.navigate(['']);
          });
        }
      });
    }
  }

  public async salvarPedido() {
    if (!this.formaPagamento) return;
    this.loadingModalVisible = true;

    const pedido = await this.createPedidoCriacao();

    if (pedido === null) {
      this.loadingModalVisible = false;
      return;
    }

    this.pedidoService
      .salvarPedido(pedido)
      .pipe(
        catchError((e) => {
          if (
            isHttpErrorResponse(e) &&
            !isServerError(e) &&
            pedido.formaPagamento === FormaPagamento.CARTAO_CREDITO
          ) {
            this.erroCartaoCredito = true;
          }

          return of(null);
        })
      )
      .subscribe((id) => {
        // quando não ocorrer um erro
        if (id !== null) {
          this.carrinhoService.clearCarrinhoFromLocalStorage();

          if (pedido.formaPagamento === FormaPagamento.PIX)
            this.router.navigate(['/', 'pagamento', 'aguardando-pagamento', id]);
          else if (pedido.formaPagamento === FormaPagamento.CARTAO_CREDITO)
            this.router.navigate(['/', 'pagamento', 'finalizado', id]);
        }
      })
      .add(() => (this.loadingModalVisible = false));
  }

  private async createPedidoCriacao(): Promise<PedidoCriacao | null> {
    if (!this.formaPagamento) return null;

    const valorTotalOriginal = await firstValueFrom(this.carrinhoService.getTotalCarrinho());

    let paymentToken!: string;
    if (this.formaPagamento === FormaPagamento.CARTAO_CREDITO) {
      try {
        paymentToken = await firstValueFrom(this.silentOrderPostService.getPaymentToken());
      } catch (e) {
        if (this.name !== 'prod') {
          if (environment.dev) console.error(e);
        }

        if (isHttpErrorResponse(e) && !isServerError(e)) {
          this.erroCartaoCredito = true;
        }

        return null;
      }
    }

    return {
      cartaoCredito:
        this.formaPagamento === FormaPagamento.CARTAO_CREDITO
          ? {
            paymentToken,
            qtdParcelas: this.qtdParcelas,
          }
          : null,
      formaPagamento: this.formaPagamento,
      itens: await this.getPedidoItensFromCarrinho(),
      valorTotal: this.formaPagamento === FormaPagamento.CARTAO_CREDITO
        ? this.pagamentoService.getValorTotal(valorTotalOriginal, this.qtdParcelas)
        : this.pagamentoService.getValorTotal(valorTotalOriginal, 1),
    };
  }

  private async getPedidoItensFromCarrinho(): Promise<ItemPedido[]> {
    const carrinho = await firstValueFrom(this.carrinhoService.getCarrinho());

    return carrinho.map(({ idProduto, quantidade, localProduto, nome, descricao }) => ({
      nome,
      descricao,
      idProduto,
      quantidade,
      localProduto,
      valor: localProduto.valorVista as number,
    }));
  }
}
