import { TestBed } from '@angular/core/testing';

import { FemmeAceinteService } from './femme-aceinte.service';

describe('FemmeAceinteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FemmeAceinteService = TestBed.get(FemmeAceinteService);
    expect(service).toBeTruthy();
  });
});
