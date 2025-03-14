import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input()
  visible = false;

  @Input()
  template!: TemplateRef<unknown>;

  @Output()
  hide = new EventEmitter<boolean>();

  handleHideEvent(event: boolean) {
    this.hide.emit(event);
  }
}
