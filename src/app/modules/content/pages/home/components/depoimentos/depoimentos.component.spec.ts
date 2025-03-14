import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentosComponent } from './depoimentos.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('DepoimentosComponent', () => {
  let component: DepoimentosComponent;
  let fixture: ComponentFixture<DepoimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [DepoimentosComponent],
    });
    fixture = TestBed.createComponent(DepoimentosComponent);
    component = fixture.componentInstance;

    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
