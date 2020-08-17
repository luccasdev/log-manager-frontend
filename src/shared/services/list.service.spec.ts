import { TestBed } from '@angular/core/testing';

import { AccessLogService } from './access-log.service';

describe('ListService', () => {
  let service: AccessLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
