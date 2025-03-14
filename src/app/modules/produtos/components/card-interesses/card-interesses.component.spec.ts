import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInteressesComponent } from './card-interesses.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardInteressesComponent', () => {
  let component: CardInteressesComponent;
  let fixture: ComponentFixture<CardInteressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CardInteressesComponent]
    });
    fixture = TestBed.createComponent(CardInteressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
