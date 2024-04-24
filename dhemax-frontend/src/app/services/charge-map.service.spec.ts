import { TestBed } from '@angular/core/testing';

import { ChargeMapService } from './charge-map.service';

describe('ChargeMapService', () => {
  let service: ChargeMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargeMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
