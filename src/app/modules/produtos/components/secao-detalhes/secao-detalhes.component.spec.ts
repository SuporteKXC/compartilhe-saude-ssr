import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoDetalhesComponent } from './secao-detalhes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SkeletonSecaoDetalhesComponent } from '../skeleton-secao-detalhes/skeleton-secao-detalhes.component';
import { SkeletonModule } from 'primeng/skeleton';

import { SkeletonInteressesComponent } from '../skeleton-interesses/skeleton-interesses.component';
import { SecaoInteresseComponent } from 'src/app/modules/produtos/components/secao-interesse/secao-interesse.component';

describe('SecaoDetalhesComponent', () => {
  let component: SecaoDetalhesComponent;
  let fixture: ComponentFixture<SecaoDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SkeletonModule,
        SharedModule
      ],
      declarations: [
        SecaoDetalhesComponent,
        SecaoInteresseComponent,
        SkeletonSecaoDetalhesComponent,
        SkeletonInteressesComponent
      ]
    });
    fixture = TestBed.createComponent(SecaoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
