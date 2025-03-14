import { Component, Input } from '@angular/core';
import { PerguntasFrequentes } from 'src/app/modules/content/models/perguntas-frequentes.model';
import { HtmlSanitizerService } from 'src/app/modules/shared/services/html-sanitizer/html-sanitizer.service';

@Component({
  selector: 'app-accordion-faq',
  templateUrl: './accordion-faq.component.html',
  styleUrls: ['./accordion-faq.component.scss']
})
export class AccordionFaqComponent {
  @Input() data!: PerguntasFrequentes[];

  protected openedTab!: number | null;

  constructor(private htmlSanitizer: HtmlSanitizerService) { }

  sanitizerHtml(texto: string) {
    return this.htmlSanitizer.sanitize(texto);
  }

  getConteudo(conteudo: string | string[]): string[] {
    return Array.isArray(conteudo) ? conteudo : [conteudo];
  }

  setOpenedTab(index: number) {
    this.openedTab = index;
  }
}
