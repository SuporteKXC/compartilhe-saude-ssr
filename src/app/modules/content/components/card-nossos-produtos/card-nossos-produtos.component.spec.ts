import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNossosServicosComponent } from './card-nossos-produtos.component';

describe('CardNossosServicosComponent', () => {
  let component: CardNossosServicosComponent;
  let fixture: ComponentFixture<CardNossosServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardNossosServicosComponent]
    });
    fixture = TestBed.createComponent(CardNossosServicosComponent);
    component = fixture.componentInstance;

    component.data = {
      icon: '',
      label: '',
      categoria: undefined
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
