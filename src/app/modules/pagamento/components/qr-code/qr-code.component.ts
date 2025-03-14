import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent {
  @Input()
  value!: string;

  @Input()
  width = 150;

  //obs.: https://www.npmjs.com/package/qrcode#error-correction-level
  // A capacidade de correção de erros permite digitalizar com sucesso um código QR,
  // mesmo se o símbolo estiver sujo ou danificado.
  protected correctionValue = 'M';
}
