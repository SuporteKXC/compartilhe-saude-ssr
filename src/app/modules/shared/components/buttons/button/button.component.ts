import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() dataTestid!: string;

  @Input() label!: string;

  @Input() labelSrOnly = false;

  @Input() icon!: string;

  @Input() iconSize = '16px';

  @Input() elementClass?: string;

  @Input() contentClass!: string;

  @Input() disabled = false;

  @Input() size?: 'small' | 'large';

  @Input() severity: 'primary' | 'secondary' | 'tertiary' | 'secondary-dark' = 'primary';

  @Input() type: 'submit' | 'reset' | 'button' = 'button';

  @Input() expand = false;

  @Input() outlined = false;

  @Input() text = false;

  @Input() loading = false;

  @Output() handleClick = new EventEmitter<void>();

  handleClickEvent(): void {
    this.handleClick.emit();
  }
}
