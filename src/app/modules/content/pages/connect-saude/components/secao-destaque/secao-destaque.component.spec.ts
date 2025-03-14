import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoDestaqueComponent } from './secao-destaque.component';
import { DialogService } from 'primeng/dynamicdialog';

describe('SecaoDestaqueComponent', () => {
  let component: SecaoDestaqueComponent;
  let fixture: ComponentFixture<SecaoDestaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoDestaqueComponent],
      providers: [DialogService]
    });
    fixture = TestBed.createComponent(SecaoDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
