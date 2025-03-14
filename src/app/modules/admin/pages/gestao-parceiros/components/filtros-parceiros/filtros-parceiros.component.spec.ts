import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosParceirosComponent } from './filtros-parceiros.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FiltrosParceirosComponent', () => {
  let component: FiltrosParceirosComponent;
  let fixture: ComponentFixture<FiltrosParceirosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FiltrosParceirosComponent]
    });
    fixture = TestBed.createComponent(FiltrosParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
