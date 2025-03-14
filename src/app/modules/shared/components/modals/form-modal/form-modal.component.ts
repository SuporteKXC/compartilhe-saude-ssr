import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnChanges, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnChanges {
  @Input({ required: true}) formGroup!: FormGroup;
  @Input() titulo!: string;
  @Input() saveAction = true;

  @Input()
  set visible(val: boolean) {
    if (this._visible != val) {
      this._visible = val;
      this.visibleChange.emit(this._visible);
    }
  }
  
  get visible(): boolean {
    return this._visible;
  }
  
  @Output() visibleChange = new EventEmitter<boolean>();
  
  @Output() handleSave = new EventEmitter<boolean>();
  
  private _visible!: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnChanges(): void {
    this.setScrollMode();
  }

  setScrollMode() {
    const document = this.document.documentElement;

    if (this.visible) {
      document.setAttribute('style', 'overflow: hidden; padding-right: 17px');
    } else {
      document.setAttribute('style', 'overflow: initial: padding-right: 0');
    }
  }

  closeModal() {
    this.formGroup.reset();
    this.visible = false;
    this.setScrollMode();
  }

  saveEvent() {
    this.handleSave.emit();
    this.formGroup.reset();
    this.visible = false;
    this.setScrollMode();
  }
}
