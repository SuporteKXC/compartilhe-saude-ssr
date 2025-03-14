import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesNossosParceirosPage } from './detalhes-nossos-parceiros.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NossosParceirosPage', () => {
  let component: DetalhesNossosParceirosPage;
  let fixture: ComponentFixture<DetalhesNossosParceirosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [DetalhesNossosParceirosPage]
    });
    fixture = TestBed.createComponent(DetalhesNossosParceirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
