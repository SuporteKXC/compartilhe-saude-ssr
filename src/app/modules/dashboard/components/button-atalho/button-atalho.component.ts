import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-atalho',
  templateUrl: './button-atalho.component.html',
  styleUrls: ['./button-atalho.component.scss']
})
export class ButtonAtalhoComponent {
  @Input() iconName!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() href!: string;
  @Input() target!: string;
  @Input() tooltip = '';

  @Output()
  handleClick = new EventEmitter<void>();

  handleClickEvent(): void {
    this.handleClick.emit();
  }
}
