import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCheckupPage } from './detalhes-checkup.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SecaoDetalhesComponent } from '../../components/secao-detalhes/secao-detalhes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SkeletonSecaoDetalhesComponent } from '../../components/skeleton-secao-detalhes/skeleton-secao-detalhes.component';
import { Skeleton } from 'primeng/skeleton';
import { SkeletonInteressesComponent } from '../../components/skeleton-interesses/skeleton-interesses.component';
import { SecaoInteresseComponent } from '../../components/secao-interesse/secao-interesse.component';

describe('DetalhesCheckupPage', () => {
  let component: DetalhesCheckupPage;
  let fixture: ComponentFixture<DetalhesCheckupPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        DetalhesCheckupPage,
        SecaoDetalhesComponent,
        SecaoInteresseComponent,
        SkeletonSecaoDetalhesComponent,
        SkeletonInteressesComponent,
        Skeleton
      ]
    });
    fixture = TestBed.createComponent(DetalhesCheckupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
