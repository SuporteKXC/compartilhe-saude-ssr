import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalEvent } from 'src/app/modules/admin/models/modal-event.model';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss']
})
export class FormTableComponent {
  @Input({ required: true }) tableData!: unknown[];
  @Input({ required: true }) tableTotal!: number;
  @Input() tableTitulo!: string;
  @Input() tableTooltip!: string;

  @Input() isLoading!: boolean;
  @Input() saveAction = true;
  @Input() editAction = true;
  @Input() deleteAction = true;
  @Input() isAccordion = false;

  @Input({ required: true }) headerTemplate?: TemplateRef<unknown>;
  @Input({ required: true }) modalTemplate?: TemplateRef<unknown>;
  @Input() bodyTemplate!: TemplateRef<unknown>;
  @Input() loadingTemplate!: TemplateRef<unknown>;
  @Input() errorTemplate?: TemplateRef<unknown>;
  @Input() emptyTemplate?: TemplateRef<unknown>;

  @Input() formGroup!: FormGroup;
  @Input() modalTitulo!: string;

  @Output() handleSave = new EventEmitter<ModalEvent>();
  @Output() handleEdit = new EventEmitter<ModalEvent>();
  @Output() handleDelete = new EventEmitter<ModalEvent>();

  protected visible = false;

  handleEditEvent(id: number, index: number) {
    this.handleEdit.emit({ isVisible: true, id, index });
    this.visible = true;
  }

  handleDeleteEvent(id: number, index: number) {
    this.handleDelete.emit({ isVisible: true, id, index });
  }
}
