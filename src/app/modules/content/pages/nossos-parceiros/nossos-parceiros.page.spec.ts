import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NossosParceirosPage } from './nossos-parceiros.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SkeletonModule } from 'primeng/skeleton';
import { SkeletonNossosParceirosComponent } from '../../components/skeleton-nossos-parceiros/skeleton-nossos-parceiros.component';

describe('NossosParceirosPage', () => {
  let component: NossosParceirosPage;
  let fixture: ComponentFixture<NossosParceirosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SkeletonModule,
        SharedModule
      ],
      declarations: [NossosParceirosPage, SkeletonNossosParceirosComponent]
    });
    fixture = TestBed.createComponent(NossosParceirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
