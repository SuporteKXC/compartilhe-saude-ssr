import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaParceirosComponent } from './tabela-parceiros.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { Subject } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TabelaParceirosComponent', () => {
  let component: TabelaParceirosComponent;
  let fixture: ComponentFixture<TabelaParceirosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      declarations: [TabelaParceirosComponent],
    });
    fixture = TestBed.createComponent(TabelaParceirosComponent);
    component = fixture.componentInstance;

    component.shouldSearchAgain$ = new Subject();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
