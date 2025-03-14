import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input({ required: true }) content!: TemplateRef<HTMLElement> | string;
  @Input() size = '16px';
  @Input() verticalAlign = 'middle';
  @Input() display!: string;
}
