import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoPlanosPrecosComponent } from './secao-planos-precos.component';

describe('SecaoPlanosPrecosComponent', () => {
  let component: SecaoPlanosPrecosComponent;
  let fixture: ComponentFixture<SecaoPlanosPrecosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoPlanosPrecosComponent]
    });
    fixture = TestBed.createComponent(SecaoPlanosPrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
