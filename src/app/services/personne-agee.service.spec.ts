import { TestBed } from '@angular/core/testing';

import { PersonneAgeeService } from './personne-agee.service';

describe('PersonneAgeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonneAgeeService = TestBed.get(PersonneAgeeService);
    expect(service).toBeTruthy();
  });
});
