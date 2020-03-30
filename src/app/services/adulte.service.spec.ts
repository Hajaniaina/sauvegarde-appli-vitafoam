import { TestBed } from '@angular/core/testing';

import { AdulteService } from './adulte.service';

describe('AdulteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdulteService = TestBed.get(AdulteService);
    expect(service).toBeTruthy();
  });
});
