import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { PaginationEvent } from '../../../models/paginacao/pagination-event.model';
import { AccordionContent } from '../../../models/accordion-content.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @ViewChild('tab', { static: true }) tab?: HTMLElement;
  
  protected openedTab!: number | null;
  protected activeIndex!: number | number[];
  private _page = 1;

  protected lastPageLoad = 0;

  @Input() isContained = true;
  @Input() isPaginated = true;
  @Input() size = 10;

  @Input()
  set page(val: number) {
    this._page = val;
    this.pageChange.emit(this._page);
  }

  get page(): number {
    return this._page;
  }

  @Input() loading = true;

  @Input() error = false;

  @Input() data!: unknown[] | AccordionContent[];

  @Input() isAccordion = false;

  @Input() total!: number;

  @Input() description!: string;

  @Input() bodyTemplate!: TemplateRef<unknown>;

  @Input() loadingTemplate!: TemplateRef<unknown>;

  @Input() actionsTemplate!: TemplateRef<unknown>;

  @Input() headerTemplate?: TemplateRef<unknown>;

  @Input() errorTemplate?: TemplateRef<unknown>;

  @Input() emptyTemplate?: TemplateRef<unknown>;

  @Input() tableStyle!: { [key: string]: unknown; };

  @Output() nextPage = new EventEmitter<PaginationEvent>();

  @Output() prevPage = new EventEmitter<PaginationEvent>();

  @Output() pageChange = new EventEmitter<number>();

  get dummyData() {
    return Array(this.page * this.size).fill(1);
  }

  get first(): number {
    return (this.page - 1) * this.size + 1;
  }

  get last(): number {
    return Math.min(this.first + this.size - 1, this.total);
  }

  resetTable(): void {
    this.page = 1;
    this.lastPageLoad = 0;
  }

  handlerNextPage() {
    if (!this.isLastPage()) {
      this.page += 1;
    }

    if (this.page > this.lastPageLoad) {
      this.lastPageLoad = this.page;
      this.nextPage.emit({ page: this.page, lastPageLoad: this.lastPageLoad });
    }
  }

  handlerPrevPage() {
    if (!this.isFirstPage()) {
      this.page -= 1;
    }

    this.prevPage.emit({ page: this.page, lastPageLoad: this.lastPageLoad });
  }

  isFirstPage() {
    return this.page <= 1;
  }

  isLastPage() {
    return this.page >= Math.ceil(this.total / this.size);
  }

  get accordionPaginated() {
    return this.data.slice((this.page - 1) * this.size, this.page * this.size);
  }

  setOpenedTab(index: number) {
    this.openedTab = index;
  }
}
