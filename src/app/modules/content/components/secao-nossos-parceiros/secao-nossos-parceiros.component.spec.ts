import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecaoNossosParceirosComponent } from './secao-nossos-parceiros.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SecaoNossosParceirosComponent', () => {
  let component: SecaoNossosParceirosComponent;
  let fixture: ComponentFixture<SecaoNossosParceirosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SecaoNossosParceirosComponent]
    });
    fixture = TestBed.createComponent(SecaoNossosParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
