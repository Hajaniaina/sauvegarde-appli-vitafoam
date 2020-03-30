import { TestBed } from '@angular/core/testing';

import { PersonneAlliteeService } from './personne-allitee.service';

describe('PersonneAlliteeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonneAlliteeService = TestBed.get(PersonneAlliteeService);
    expect(service).toBeTruthy();
  });
});
