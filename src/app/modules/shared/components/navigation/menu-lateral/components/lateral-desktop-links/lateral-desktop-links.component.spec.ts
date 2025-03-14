import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralDesktopLinksComponent } from './lateral-desktop-links.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { Panel, PanelModule } from 'primeng/panel';
import { Menu, MenuModule } from 'primeng/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MenuDesktopComponent', () => {
  let component: LateralDesktopLinksComponent;
  let fixture: ComponentFixture<LateralDesktopLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        SharedModule, 
        PanelModule, 
        MenuModule,
        NoopAnimationsModule, 
      ],
      declarations: [
        LateralDesktopLinksComponent,
        Panel,
        Menu
      ],
    });
    fixture = TestBed.createComponent(LateralDesktopLinksComponent);
    component = fixture.componentInstance;
    component.menuItems = [
      { label: 'Label', path: 'path' },
      { label: 'Label', subRoutes: [{ label: 'Label', path: 'path' }] },
      { label: 'Label', path: 'path' },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
