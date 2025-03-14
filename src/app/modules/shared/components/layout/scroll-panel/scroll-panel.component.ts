import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, PLATFORM_ID, TemplateRef, ViewChild } from '@angular/core';
import { ScrollPanel } from 'primeng/scrollpanel';

@Component({
  selector: 'app-scroll-panel',
  templateUrl: './scroll-panel.component.html',
  styleUrls: ['./scroll-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollPanelComponent implements OnInit {
  @ViewChild(ScrollPanel) scrollPanel?: ScrollPanel;

  @Input() desktopOnly = false;
  @Input() scroll = true;
  @Input() style!: { [key: string]: string; };
  @Input() contentTemplate!: TemplateRef<unknown>;

  protected isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private plataformId: string) { }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.plataformId);
  }

  public get isOverflowing(): boolean {
    const nativeElement: HTMLElement | undefined = this.scrollPanel?.el.nativeElement;
    const scrollPanelContentElement: HTMLDivElement | null | undefined =
      nativeElement?.querySelector('.p-scrollpanel-content');

    if (!scrollPanelContentElement) return false;
    else return scrollPanelContentElement.scrollHeight > scrollPanelContentElement.offsetHeight;
  }

  public get className(): string {
    let className = 'scroll-panel';

    if (this.isOverflowing) className += ' overflowing';
    if (this.desktopOnly) className += ' only-desktop';

    return className;
  }
}
