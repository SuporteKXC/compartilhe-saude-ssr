import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckupsPage } from './checkups.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Skeleton, SkeletonModule } from 'primeng/skeleton';
import { CardProdutosComponent } from 'src/app/modules/shared/components/misc/card-produtos/card-produtos.component';
import { SkeletonCardProdutosComponent } from 'src/app/modules/shared/components/misc/skeleton-card-produtos/skeleton-card-produtos.component';

describe('PacotesDeCheckupPage', () => {
  let component: CheckupsPage;
  let fixture: ComponentFixture<CheckupsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, SkeletonModule],
      declarations: [
        CheckupsPage,
        CardProdutosComponent,
        SkeletonCardProdutosComponent,
        Skeleton
      ]
    });
    fixture = TestBed.createComponent(CheckupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
