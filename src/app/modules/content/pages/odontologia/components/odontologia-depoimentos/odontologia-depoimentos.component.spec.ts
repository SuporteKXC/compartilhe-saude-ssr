import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontologiaDepoimentosComponent } from './odontologia-depoimentos.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('OdontologiaDepoimentosComponent', () => {
  let component: OdontologiaDepoimentosComponent;
  let fixture: ComponentFixture<OdontologiaDepoimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [OdontologiaDepoimentosComponent]
    });
    fixture = TestBed.createComponent(OdontologiaDepoimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
