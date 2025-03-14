import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontologiaPage } from './odontologia.page';
import { OdontologiaChamadaPrincipalComponent } from './components/odontologia-chamada-principal/odontologia-chamada-principal.component';
import { OdontologiaNossosServicosComponent } from './components/odontologia-nossos-servicos/odontologia-nossos-servicos.component';
import { CheckupOdontologiaComponent } from './components/checkup-odontologia/checkup-odontologia.component';
import { OdontologiaNossasUnidadesComponent } from './components/odontologia-nossas-unidades/odontologia-nossas-unidades.component';
import { OdontologiaDepoimentosComponent } from './components/odontologia-depoimentos/odontologia-depoimentos.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('OdontologiaPage', () => {
  let component: OdontologiaPage;
  let fixture: ComponentFixture<OdontologiaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        OdontologiaPage, 
        OdontologiaChamadaPrincipalComponent, 
        OdontologiaNossosServicosComponent, 
        CheckupOdontologiaComponent, 
        OdontologiaNossasUnidadesComponent, 
        OdontologiaDepoimentosComponent
      ]
    });
    fixture = TestBed.createComponent(OdontologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
