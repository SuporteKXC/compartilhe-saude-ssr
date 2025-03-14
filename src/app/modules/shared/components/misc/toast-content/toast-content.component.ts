import { Component, Input } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast-content',
  templateUrl: './toast-content.component.html',
  styleUrls: ['./toast-content.component.scss']
})
export class ToastContentComponent {
  @Input() message!: Message;

  constructor(protected messageService: MessageService) { }
}
