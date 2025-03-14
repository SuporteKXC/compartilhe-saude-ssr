import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontologiaNossosServicosComponent } from './odontologia-nossos-servicos.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('OdontologiaNossosServicosComponent', () => {
  let component: OdontologiaNossosServicosComponent;
  let fixture: ComponentFixture<OdontologiaNossosServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [OdontologiaNossosServicosComponent]
    });
    fixture = TestBed.createComponent(OdontologiaNossosServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
