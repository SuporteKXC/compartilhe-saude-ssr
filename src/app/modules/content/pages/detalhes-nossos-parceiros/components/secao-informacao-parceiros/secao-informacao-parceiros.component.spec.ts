import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoInformacaoParceirosComponent } from './secao-informacao-parceiros.component';
import { JoinStringPipe } from 'src/app/modules/shared/pipes/join-string.pipe';

describe('SecaoInformacaoParceirosComponent', () => {
  let component: SecaoInformacaoParceirosComponent;
  let fixture: ComponentFixture<SecaoInformacaoParceirosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoInformacaoParceirosComponent, JoinStringPipe],
    });
    fixture = TestBed.createComponent(SecaoInformacaoParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
