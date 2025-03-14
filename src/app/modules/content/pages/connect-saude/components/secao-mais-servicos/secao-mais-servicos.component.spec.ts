import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoMaisServicosComponent } from './secao-mais-servicos.component';

describe('SecaoMaisServicosComponent', () => {
  let component: SecaoMaisServicosComponent;
  let fixture: ComponentFixture<SecaoMaisServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoMaisServicosComponent]
    });
    fixture = TestBed.createComponent(SecaoMaisServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
