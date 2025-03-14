import { Injectable } from '@angular/core';
import DOMPurify from 'dompurify';


@Injectable({
  providedIn: 'root'
})
export class HtmlSanitizerService {
  private allowedTags: string[] = ['a', 'p', 'span'];

  constructor() {
    DOMPurify.addHook('beforeSanitizeAttributes', (node) => {
      if (node.tagName === 'A') {
        const href = node.getAttribute('href');
        if (href && (href.startsWith('javascript:') || href.startsWith('data:'))) {
          node.removeAttribute('href');
        }
      }
    });

    DOMPurify.addHook('afterSanitizeAttributes', function (node) {
      if ('target' in node) {
        const href = node.getAttribute('href');
        if((href && !href.startsWith('/'))) {
          node.setAttribute('target', '_blank');
          node.setAttribute('rel', 'noopener');
        }
      }
    });
  }

  sanitize(html: string): string {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: this.allowedTags,
      ALLOWED_ATTR: ['href', 'routerLink', 'target', 'title']
    }).trim();
  }
}
