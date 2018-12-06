import { TestBed } from '@angular/core/testing';

import { FakeDatabaseService } from './fake-database.service';

describe('FakeDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeDatabaseService = TestBed.get(FakeDatabaseService);
    expect(service).toBeTruthy();
  });
});
