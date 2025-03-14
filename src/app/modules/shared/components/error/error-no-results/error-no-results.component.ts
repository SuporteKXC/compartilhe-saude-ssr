import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-error-no-results',
  templateUrl: './error-no-results.component.html',
  styleUrls: ['./error-no-results.component.scss']
})
export class ErrorNoResultsComponent {
  @Input()
  header!: string;

  @Input()
  description!: string;

  @Input()
  iconName!: string;

  @Input() 
  actionsTemplate?: TemplateRef<unknown>;

  @Output()
  actionEvent = new EventEmitter<void>();

  handleActionEvent(): void {  
    this.actionEvent.emit();
  }
}
