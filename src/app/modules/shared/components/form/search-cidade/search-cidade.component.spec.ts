import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCidadeComponent } from './search-cidade.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchCidadeComponent', () => {
  let component: SearchCidadeComponent;
  let fixture: ComponentFixture<SearchCidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchCidadeComponent]
    });
    fixture = TestBed.createComponent(SearchCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
