import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontologiaChamadaPrincipalComponent } from './odontologia-chamada-principal.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('OdontologiaChamadaPrincipalComponent', () => {
  let component: OdontologiaChamadaPrincipalComponent;
  let fixture: ComponentFixture<OdontologiaChamadaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [OdontologiaChamadaPrincipalComponent]
    });
    fixture = TestBed.createComponent(OdontologiaChamadaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
