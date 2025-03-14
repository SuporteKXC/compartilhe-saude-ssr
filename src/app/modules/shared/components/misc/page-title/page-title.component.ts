import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent {
  @Input() titulo!: string;
  @Input() returnPath!: string[];
  @Input() breadcrumbData!: MenuItem[];

  @Output() handleClick = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  public return(): void {
    this.router.navigate(this.returnPath);
  }

  protected handleClickEvent(): void {
    this.handleClick.emit();
  }
}
