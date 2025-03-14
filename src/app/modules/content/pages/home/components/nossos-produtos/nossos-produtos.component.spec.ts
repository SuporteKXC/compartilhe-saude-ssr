import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosProdutosComponent } from './nossos-produtos.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('NossosProdutosComponent', () => {
  let component: NossosProdutosComponent;
  let fixture: ComponentFixture<NossosProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [NossosProdutosComponent],
    });
    fixture = TestBed.createComponent(NossosProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
