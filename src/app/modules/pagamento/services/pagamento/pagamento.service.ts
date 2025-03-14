import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagamentoService {
  private static PORCENTAGEM_TAXA_PARCELAMENTO = 0.15;

  public getValorTotal(valorOriginal: number, qtdParcelas: number) {
    const valor = valorOriginal + this.getTaxaParcelamento(valorOriginal, qtdParcelas);
    return parseFloat(valor.toFixed(2));
  }

  public getTaxaParcelamento(valorOriginal: number, qtdParcelas: number): number {
    const valorParcela = this.getValorParcela(valorOriginal, qtdParcelas);
    const taxaParcelamento = valorParcela * qtdParcelas - valorOriginal;

    return parseFloat(taxaParcelamento.toFixed(2));
  }

  public getValorParcela(valorOriginal: number, qtdParcelas: number): number {
    const taxaParcelamento =
      Math.ceil(valorOriginal * 100 * PagamentoService.PORCENTAGEM_TAXA_PARCELAMENTO) / 100;

    const valorTotalParcelado = valorOriginal + (qtdParcelas > 1 ? taxaParcelamento : 0);

    return Math.ceil((valorTotalParcelado * 100) / qtdParcelas) / 100;
  }
}
