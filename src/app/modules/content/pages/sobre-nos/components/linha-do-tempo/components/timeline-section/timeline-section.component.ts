import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timeline-section',
  templateUrl: './timeline-section.component.html',
  styleUrls: ['./timeline-section.component.scss'],
})
export class TimelineSectionComponent implements AfterViewInit {
  @ViewChild('section', { static: false }) sectionRef!: ElementRef<HTMLDivElement>;
  @ViewChild('mark', { static: false }) markRef!: ElementRef<HTMLDivElement>;
  @ViewChild('textElement', { static: false }) textRef!: ElementRef<HTMLParagraphElement>;
  @ViewChild('yearElement', { static: false }) yearRef!: ElementRef<HTMLElement>;
  @ViewChild('imgElement', { static: false }) imgRef!: ElementRef<HTMLImageElement>;

  @Input() imageAtTop = false;

  @Input() text!: string;
  @Input() year!: number;

  @Input() img!: string;
  @Input() altImg!: string;

  ngAfterViewInit(): void {
    setInterval(() => this.defineSectionPadding(), 500);
  }

  private defineSectionPadding(): void {
    const boundingRectMark = this.markRef.nativeElement.getBoundingClientRect();
    const boundingRectSection = this.sectionRef.nativeElement.getBoundingClientRect();

    const topPart =
      boundingRectMark.top -
      boundingRectSection.top -
      parseFloat(this.sectionRef.nativeElement.style.paddingTop || '0');
    const bottomPart =
      boundingRectSection.bottom -
      boundingRectMark.bottom -
      parseFloat(this.sectionRef.nativeElement.style.paddingBottom || '0');

    const padding = topPart - bottomPart;

    if (padding > 0) {
      this.sectionRef.nativeElement.style.paddingTop = '0';
      this.sectionRef.nativeElement.style.paddingBottom = `${padding}px`;
    } else {
      this.sectionRef.nativeElement.style.paddingTop = `${-padding}px`;
      this.sectionRef.nativeElement.style.paddingBottom = '0';
    }
  }
}
