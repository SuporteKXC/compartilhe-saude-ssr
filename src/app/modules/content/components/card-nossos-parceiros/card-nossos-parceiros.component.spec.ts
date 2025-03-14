import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNossosParceirosComponent } from './card-nossos-parceiros.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { JoinStringPipe } from 'src/app/modules/shared/pipes/join-string.pipe';
import { MaskPipe } from 'src/app/modules/shared/pipes/mask.pipe';
import { RedeCompartilhe } from 'src/app/modules/shared/models/parceiro/rede-compartilhe.model';

describe('CardNossosParceirosComponent', () => {
  let component: CardNossosParceirosComponent;
  let fixture: ComponentFixture<CardNossosParceirosComponent>;

  const parceiro = {
    unidadePropria: false,
    nomeParceiro: 'Clinica compartilhe saúde',
    cidade: 'Pinheiros',
    uf: 'ES',
    servicosOferecidos: [''],
    tiposEspecialidade: [''],
    locaisAtendimento: ['']
  } as unknown as RedeCompartilhe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CardNossosParceirosComponent],
      providers: [JoinStringPipe, MaskPipe]
    });
    fixture = TestBed.createComponent(CardNossosParceirosComponent);
    component = fixture.componentInstance;
    component.data = parceiro;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
