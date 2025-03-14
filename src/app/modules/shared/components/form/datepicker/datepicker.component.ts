import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
  ViewChild,
} from '@angular/core';
import { BaseFormComponent } from '../base-form-component';
import { NgControl } from '@angular/forms';
import { Calendar } from 'primeng/calendar';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent extends BaseFormComponent implements AfterViewInit {
  @Input() placeholder = '';
  @Input() mode?: 'single' | 'multiple' | 'range' = 'single';
  @Input() readonlyInput = true;
  @Input() showClear = false;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;

  @Output() dateSelect = new EventEmitter();

  @ViewChild('calendar') calendar?: Calendar;

  private lastDateSelected: Date | Date[] | [Date, Date] | null = null;

  public get isFirstDaySelected(): boolean {
    return this.mode === 'range' && (this.control.value as [Date | null, Date | null])?.[0] != null;
  }

  public get isLastDaySelected(): boolean {
    return this.mode === 'range' && (this.control.value as [Date | null, Date | null])?.[1] != null;
  }

  public get bothLimitDaysSelected(): boolean {
    return this.isFirstDaySelected && this.isLastDaySelected;
  }

  public get areRangeDaysEqual(): boolean {
    if (this.mode !== 'range') return false;

    const firstDay = (this.control.value as [Date | null, Date | null])?.[0];
    const lastDay = (this.control.value as [Date | null, Date | null])?.[1];

    return firstDay?.getTime() === lastDay?.getTime();
  }

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  ngAfterViewInit(): void {
    if (this.calendar) {
      if (this.minDate) this.calendar.minDate = this.minDate;
      if (this.maxDate) this.calendar.maxDate = this.maxDate;
    }
  }

  public handleClickOutside() {
    if (
      this.mode === 'range' &&
      (this.control?.value as [Date | null, Date | null])?.some((date) => date === null)
    )
      this.calendar?.clear();

    if (this.dateHasChangedSinceLastCheck()) this.dateSelect.emit();
  }

  public handleSelect() {
    if (
      this.mode !== 'range' ||
      (this.mode === 'range' &&
        (this.control.value as [Date | null, Date | null]).every((date) => date !== null))
    ) {
      this.onChange(this.control.value);
    }
  }

  public handleClear() {
    this.dateSelect.emit();
  }

  public isFirstDayOfRange(dateToTest: { day: number; month: number; year: number }): boolean {
    if (this.mode !== 'range') return false;

    const firstDay = (this.control.value as [Date | null, Date | null] | null)?.[0];

    return (firstDay && this.isDateEqualToDateObject(firstDay, dateToTest)) ?? false;
  }

  public isLastDayOfRange(dateToTest: { day: number; month: number; year: number }): boolean {
    if (this.mode !== 'range') return false;

    const lastDay = (this.control.value as [Date | null, Date | null] | null)?.[1];

    return (lastDay && this.isDateEqualToDateObject(lastDay, dateToTest)) ?? false;
  }

  public isDateInRange(dateToTest: { day: number; month: number; year: number }): boolean {
    if (this.mode !== 'range') return false;

    const firstDay = (this.control.value as [Date | null, Date | null] | null)?.[0];
    const lastDay = (this.control.value as [Date | null, Date | null] | null)?.[1];

    if (!firstDay || !lastDay) return false;

    const dateObject = DateTime.fromObject({
      day: dateToTest.day,
      month: dateToTest.month + 1,
      year: dateToTest.year,
    }).toJSDate();

    return firstDay <= dateObject && dateObject <= lastDay;
  }

  private isDateEqualToDateObject(
    date: Date,
    dateObject: { day: number; month: number; year: number }
  ): boolean {
    return (
      date.getDate() === dateObject.day &&
      date.getMonth() === dateObject.month &&
      date.getFullYear() === dateObject.year
    );
  }

  private dateHasChangedSinceLastCheck(): boolean {
    let dateChanged = false;

    if (this.control.value !== this.lastDateSelected) {
      dateChanged = true;
    }

    this.lastDateSelected = this.control.value;
    return dateChanged;
  }
}
