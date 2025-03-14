import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontologiaNossasUnidadesComponent } from './odontologia-nossas-unidades.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('OdontologiaNossasUnidadesComponent', () => {
  let component: OdontologiaNossasUnidadesComponent;
  let fixture: ComponentFixture<OdontologiaNossasUnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [OdontologiaNossasUnidadesComponent]
    });
    fixture = TestBed.createComponent(OdontologiaNossasUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
