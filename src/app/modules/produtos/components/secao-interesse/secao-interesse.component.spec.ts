import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoInteresseComponent } from './secao-interesse.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SkeletonModule } from 'primeng/skeleton';
import { SkeletonInteressesComponent } from '../skeleton-interesses/skeleton-interesses.component';

describe('SecaoInteresseComponent', () => {
  let component: SecaoInteresseComponent;
  let fixture: ComponentFixture<SecaoInteresseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, SkeletonModule],
      declarations: [SecaoInteresseComponent, SkeletonInteressesComponent]
    });
    fixture = TestBed.createComponent(SecaoInteresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
