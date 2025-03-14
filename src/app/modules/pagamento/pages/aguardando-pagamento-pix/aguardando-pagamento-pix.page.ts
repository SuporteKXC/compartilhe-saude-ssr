import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { StatusPedido } from '../../enums/status-pedido';
import { DateTime } from 'luxon';
import { PedidoService } from '../../../shared/services/pedido/pedido.service';
import { PedidoDetalhePix } from '../../models/pedido-detalhe-pix.model';

@Component({
  selector: 'app-aguardando-pagamento-pix',
  templateUrl: './aguardando-pagamento-pix.page.html',
  styleUrls: ['./aguardando-pagamento-pix.page.scss'],
})
export class AguardandoPagamentoPixPage implements OnInit, OnDestroy {
  public dataHoraExpiracao?: Date;

  public detalhesPix?: PedidoDetalhePix | null;

  public msgTempoAteExpiracao = '';
  private intervalUpdateMsgTempoAteExpiracao!: NodeJS.Timeout;

  public verificandoPagamento = false;
  public pagamentoVerificadoNaoPago = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.pedidoService
      .getDadosPedidoPix(this.route.snapshot.params['id'])
      .pipe(
        catchError(() => {
          this.router.navigate(['/', 'dashboard']);

          return of(null);
        }),
        tap((dados) => {
          if (dados?.status !== StatusPedido.AGUARDA_PAGAMENTO)
            this.router.navigate(['/', 'dashboard']);
        })
      )
      .subscribe((dados) => {
        this.detalhesPix = dados;
        this.dataHoraExpiracao = dados?.dataHoraExpiracao
          ? new Date(dados.dataHoraExpiracao)
          : undefined;

        this.updateMsgTempoAteExpiracao(); // update no início para que não fique um segundo sem mensagem
      });

    this.intervalUpdateMsgTempoAteExpiracao = setInterval(
      () => this.updateMsgTempoAteExpiracao(),
      1000
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalUpdateMsgTempoAteExpiracao);
  }

  public copiarCodigo(): void {
    navigator.clipboard.writeText(this.detalhesPix?.qrCode ?? '');

    this.messageService.add({
      severity: 'success',
      summary: 'Código PIX copiado.',
      icon: 'check_circle',
    });
  }

  public verificarPagamento(): void {
    const id = parseInt(this.route.snapshot.params['id']);

    this.verificandoPagamento = true;
    this.pedidoService
      .verificaPagamentoPix(id)
      .subscribe((pedidoPago) => {
        if (pedidoPago) this.router.navigate(['/', 'pagamento', 'finalizado', id]);
        else this.pagamentoVerificadoNaoPago = true;
      })
      .add(() => (this.verificandoPagamento = false));
  }

  public navigateToMeusPedidos(): void {
    this.router.navigate(['/', 'dashboard', 'meus-pedidos']);
  }

  private updateMsgTempoAteExpiracao(): void {
    if (!this.dataHoraExpiracao) {
      this.msgTempoAteExpiracao = '';
      return;
    }

    const diff = DateTime.fromJSDate(this.dataHoraExpiracao).diff(DateTime.now(), [
      'hours',
      'minutes',
      'seconds',
    ]);

    if (diff.toMillis() < 0) {
      this.msgTempoAteExpiracao = '';
      return;
    }

    const hours = diff.toObject().hours?.toString().padStart(2, '0');
    const minutes = diff.toObject().minutes?.toString().padStart(2, '0');
    const seconds = Math.floor(diff.toObject().seconds ?? 0)
      .toString()
      .padStart(2, '0');

    this.msgTempoAteExpiracao = `${hours}:${minutes}:${seconds}`;
  }
}
