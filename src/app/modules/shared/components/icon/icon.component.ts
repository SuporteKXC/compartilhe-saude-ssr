import { Component, Input, OnInit } from '@angular/core';
import { WindowService } from '../../services/window/window.service';
import { MOBILE_WIDTH_SIZE } from '../../constants/device-size';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: [],
})
export class IconComponent implements OnInit {
  @Input() iconName!: string;
  @Input() iconSize?: string;
  @Input() iconSizeDesktop?: string;
  @Input() verticalAlign = 'middle';
  @Input() display?: string;

  protected isMobile = true;

  constructor(private windowService: WindowService) { }

  ngOnInit(): void {
    this.windowService.size$.subscribe(size => {
      if (size.width >= MOBILE_WIDTH_SIZE) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    });
  }
}
