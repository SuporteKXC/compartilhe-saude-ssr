import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAtalhoComponent } from './button-atalho.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { IconComponent } from 'src/app/modules/shared/components/icon/icon.component';

describe('ButtonAtalhoComponent', () => {
  let component: ButtonAtalhoComponent;
  let fixture: ComponentFixture<ButtonAtalhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ButtonAtalhoComponent, IconComponent]
    });
    fixture = TestBed.createComponent(ButtonAtalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
