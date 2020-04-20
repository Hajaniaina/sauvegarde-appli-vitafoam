import { TestBed } from '@angular/core/testing';

import { EvaluationShowRoomServiceService } from './evaluation-show-room-service.service';

describe('EvaluationShowRoomServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluationShowRoomServiceService = TestBed.get(EvaluationShowRoomServiceService);
    expect(service).toBeTruthy();
  });
});
