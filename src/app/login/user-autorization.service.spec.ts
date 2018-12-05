import { TestBed } from '@angular/core/testing';

import { UserAutorizationService } from './user-autorization.service';

describe('UserAutorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAutorizationService = TestBed.get(UserAutorizationService);
    expect(service).toBeTruthy();
  });
});
