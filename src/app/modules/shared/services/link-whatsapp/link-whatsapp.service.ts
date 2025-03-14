import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LinkWhatsappService {
  private url = 'https://wa.me';
  private tel = '552736002121';

  public gerarLink(mensagemInicial?: string, numero?: string, url?: string): string {
    const telefone = numero || this.tel;
    url = url || `${this.url}/${telefone}`;

    if (mensagemInicial) {
      return `${url}?text=${encodeURIComponent(mensagemInicial)}`;
    }

    return url;
  }

  public shareLink(mensagemInicial: string): string {
    return `${this.url}?text=${encodeURIComponent(mensagemInicial)}`;
  }
}
