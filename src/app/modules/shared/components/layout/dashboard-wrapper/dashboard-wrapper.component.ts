import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard-wrapper',
  templateUrl: './dashboard-wrapper.component.html',
  styleUrls: ['./dashboard-wrapper.component.scss']
})
export class DashboardWrapperComponent implements AfterViewChecked {
  @ViewChild('footer') footer!: ElementRef;

  protected hasFooter = false;
  
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewChecked(): void {
    const footerElement: HTMLElement = this.footer.nativeElement;
    const colletion: HTMLCollection = footerElement.children;

    this.hasFooter = this.hasChildren(colletion);
    this.cdr.detectChanges();
  }

  hasChildren(collection: HTMLCollection) {
    return collection.length > 0;
  }
}
