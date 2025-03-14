import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-overflow-tooltip',
  templateUrl: './overflow-tooltip.component.html',
  styleUrls: ['./overflow-tooltip.component.scss']
})
export class OverflowTooltipComponent {
  @ViewChild('tooltipText') tooltipTextElement!: ElementRef;

  @Input() content!: string;
  @Input() size = '15px';
  @Input() overflow = false;
  @Input() modal = false;

  @Output() visible = new EventEmitter<boolean>(false);

  protected isTooltipVisible = false;

  toggleVisibility(): void {
    this.isTooltipVisible = !this.isTooltipVisible;
    this.visible.emit(this.isTooltipVisible);
  }
}
