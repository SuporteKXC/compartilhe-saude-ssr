import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { CanComponentDeactivate, unsavedChangesGuard } from './unsaved-changes.guard';

describe('unsavedChangesGuard', () => {
  const executeGuard: CanDeactivateFn<CanComponentDeactivate> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unsavedChangesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
