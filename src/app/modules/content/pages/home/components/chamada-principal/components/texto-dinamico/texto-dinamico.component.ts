import { trigger, transition, style, animate } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { interval } from 'rxjs';
import { TOTAL_ANIMATION_CICLO_TIME } from 'src/app/modules/shared/constants/animations';

@Component({
  selector: 'app-texto-dinamico',
  templateUrl: './texto-dinamico.component.html',
  styleUrls: ['./texto-dinamico.component.scss'],
  animations: [
    trigger('toggleTitle', [
      transition(':enter', [
        style({ width: '0', overflow: 'hidden' }),
        animate('4s ease', style({ width: '*' })),
      ]),
    ]),
  ],
})
export class TextoDinamicoComponent implements OnInit {
  protected titulos = ['para você', 'para sua família', 'para sua empresa'];
  protected tituloDinamico = '';

  private tempoCicloTotal = TOTAL_ANIMATION_CICLO_TIME;
  private index = 0;

  constructor(
    private ngZone: NgZone, 
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.efeitoDigitacao();
    });
  }

  clearText() {
    this.tituloDinamico = '';
  }

  efeitoDigitacao() {
    if (isPlatformBrowser(this.plataformId)) {
      const texto = this.titulos[this.index];
      const textoArray = texto.split('');
      const digitacaoVelocidade = 50;

      let digitacaoIndex = 0;

      const intervalo = interval(digitacaoVelocidade).subscribe(() => {
        if (digitacaoIndex < textoArray.length) {
          this.tituloDinamico += textoArray[digitacaoIndex];
          digitacaoIndex++;
          this.cdr.detectChanges();
        } else {
          intervalo.unsubscribe();

          const digitacaoTempoTotal = digitacaoIndex * digitacaoVelocidade;
          const exclusaoTempoTotal = digitacaoTempoTotal;

          const tempoEspera = this.tempoCicloTotal - (digitacaoTempoTotal + exclusaoTempoTotal);

          setTimeout(() => {
            this.efeitoExclusao(textoArray.length * digitacaoVelocidade);
          }, tempoEspera);
        }
      });
    }
  }

  efeitoExclusao(exclusaoTempoTotal: number) {
    if (isPlatformBrowser(this.plataformId)) {
      const textoTamanho = this.tituloDinamico.length;
      const exclusaoVelocidade = exclusaoTempoTotal / textoTamanho;

      let exclusaoIndex = textoTamanho;

      const intervalo = interval(exclusaoVelocidade).subscribe(() => {
        if (exclusaoIndex > 0) {
          this.tituloDinamico = this.tituloDinamico.slice(0, exclusaoIndex - 1);
          exclusaoIndex--;
          this.cdr.detectChanges();
        } else {
          intervalo.unsubscribe();

          this.index = (this.index + 1) % this.titulos.length;
          this.efeitoDigitacao();
        }
      });
    }
  }
}
