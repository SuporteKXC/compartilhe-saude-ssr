import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-error-list-message',
  templateUrl: './error-list-message.component.html',
  styleUrls: ['./error-list-message.component.scss'],
})
export class ErrorListMessageComponent {
  @Input() iconName = 'error';
  @Input() header?: string;
  @Input() message?: string;
  
  @Input() actionButtonTemplate!: TemplateRef<unknown>;
}
