import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SecaoParceirosDestaqueComponent } from './secao-parceiros-destaque.component';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';
import { JoinStringPipe } from 'src/app/modules/shared/pipes/join-string.pipe';

describe('SecaoParceirosDestaqueComponent', () => {
  let component: SecaoParceirosDestaqueComponent;
  let fixture: ComponentFixture<SecaoParceirosDestaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [SecaoParceirosDestaqueComponent],
      providers: [ParceirosService, JoinStringPipe],
    });
    fixture = TestBed.createComponent(SecaoParceirosDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
