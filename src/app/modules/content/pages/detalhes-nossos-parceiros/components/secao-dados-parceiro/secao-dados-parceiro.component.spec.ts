import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecaoDadosParceiroComponent } from './secao-dados-parceiro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SecaoDetalhesNossosParceirosComponent', () => {
  let component: SecaoDadosParceiroComponent;
  let fixture: ComponentFixture<SecaoDadosParceiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SecaoDadosParceiroComponent],
      providers: []
    });
    fixture = TestBed.createComponent(SecaoDadosParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

