import { isPlatformBrowser, NgIfContext } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_INITIALIZER, TemplateRef } from '@angular/core';
import { PaginationEvent } from '../../../models/paginacao/pagination-event.model';
import { MOBILE_WIDTH_SIZE } from '../../../constants/device-size';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
})
export class GridListComponent implements OnInit {
  private _page = 1;

  @Input()
  set page(val: number) {
    this._page = val;
    this.pageChange.emit(this._page);
  }

  get page(): number {
    return this._page;
  }

  @Output()
  pageChange = new EventEmitter<number>();

  @Input()
  size = 8;

  @Input()
  mobileSize = 2;

  @Input()
  total!: number;

  @Input()
  header!: string;

  @Input()
  items!: unknown[];

  @Input()
  cardTemplate!: TemplateRef<unknown>;

  @Input()
  skeletonTemplate!: TemplateRef<NgIfContext<boolean>>;

  @Input()
  errorTemplate!: TemplateRef<unknown>;

  @Input()
  noItemsTemplate!: TemplateRef<unknown>;

  @Input()
  buttonTemplate!: TemplateRef<unknown>;

  @Input()
  searchTemplate?: TemplateRef<unknown>;

  @Input()
  loading = false;

  @Input()
  error = false;

  @Input()
  layout: 'grid' | 'grid grid-nogutter' | 'list' = 'grid';

  @Input()
  scroll = false;

  @Output()
  handleNextPage = new EventEmitter<PaginationEvent>();

  protected isBrowser = false;

  constructor(@Inject(PLATFORM_INITIALIZER) private plataformId: string) { }
  
  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.plataformId);

    if (this.isBrowser) {
      const windowWidth = window?.innerWidth;
      if (windowWidth <= MOBILE_WIDTH_SIZE) this.size = this.mobileSize;
    }
  }

  get skeletonListSize() {
    return Array.apply(0, new Array(this.size));
  }

  handlerNextPageEvent() {
    this.page += 1;
    this.handleNextPage.emit({ page: this.page });
  }
}
