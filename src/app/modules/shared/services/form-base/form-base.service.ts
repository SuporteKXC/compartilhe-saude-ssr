import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { distinctUntilChanged } from 'rxjs';
import { TOAST_TIME_MS } from '../../constants/animations';
import { onlyDigits } from '../../functions/util/only-digits';
import { FormMessage } from './models/form-message.model';
import { ParsedValue } from './models/parsed-value.model';

@Injectable({
  providedIn: 'root'
})
export class FormBaseService {
  private _messageService = inject(MessageService);

  public fb = inject(FormBuilder);

  private _formGroup: FormGroup | undefined;
  private _formSaved = true;
  private _toastTime = TOAST_TIME_MS;

  get isFormSaved() {
    return this._formSaved;
  }

  set formGroup(formGroup: FormGroup) {
    this._formGroup = formGroup;
  }

  save(event?: SubmitEvent) {
    event?.preventDefault();
    this._formSaved = true;
  }

  onSaveSuccess(formSuccessMessage: FormMessage) {
    this._messageService.add({
      severity: 'success',
      summary: formSuccessMessage.message,
      icon: 'check_circle',
      life: this._toastTime,
      id: 'toastFormSuccess',
      key: 'toastFormSuccessKey'
    });

    setTimeout(formSuccessMessage.onSendCallback, this._toastTime);
  }

  checkChanges(formGroups?: FormGroup | FormGroup[]): void {
    const groups = Array.isArray(formGroups) 
    ? formGroups : formGroups 
    ? [formGroups] : [this._formGroup];
  
    groups.forEach(group => {
      if (group) {
        group.valueChanges.pipe(
          distinctUntilChanged((prev, curr) => prev === curr)
        ).subscribe(() => {
          this._formSaved = false;
        });
      }
    });
  }

  parseValue<T>(fieldsToProcess?: string[]): T {
    if (!this._formGroup) {
      return {} as T;
    }

    const parsedValue = this._formGroup.getRawValue();

    if (!fieldsToProcess) {
      return parsedValue;
    }

    fieldsToProcess.forEach(field => {
      const fieldControl = this._formGroup?.get(field);
      if (fieldControl) {
        parsedValue[field] = onlyDigits(fieldControl.value);
      }
    });

    this.processNestedValues(parsedValue, fieldsToProcess);

    return parsedValue as T;
  }

  private processNestedValues(
    value: ParsedValue | ParsedValue[],
    fieldsToProcess: string[]
  ): void {
    if (Array.isArray(value)) {
      value.forEach(item => this.processNestedValues(item, fieldsToProcess));
    } else if (value && typeof value === 'object') {
      Object.keys(value).forEach(key => {
        const itemValue = value[key];
        if (Array.isArray(itemValue) || (itemValue && typeof itemValue === 'object')) {
          this.processNestedValues(itemValue, fieldsToProcess);
        } else if (typeof itemValue === 'string' && fieldsToProcess.includes(key)) {
          value[key] = onlyDigits(itemValue);
        }
      });
    }
  }
}
