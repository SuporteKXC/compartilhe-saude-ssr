import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  private _visible = false;

  @Input() 
  set visible(val: boolean) {
    this._visible = val;
    this.visibleChange.emit(this._visible);
  }
  
  get visible(): boolean {
    return this._visible;
  }

  @Input() closable = true;

  @Input() headerTemplate!: TemplateRef<unknown>;
  @Input() contentTemplate!: TemplateRef<unknown>;
  @Input() footerTemplate!: TemplateRef<unknown>;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() handleClose = new EventEmitter<void>();

  public handleCloseEvent(): void {
    this.handleClose.emit();
  }

  public visibleChangeEvent(): void {
    this.visibleChange.emit();
  }

  protected showHeader(): boolean {
    return this.closable || Boolean(this.headerTemplate);
  }
}
