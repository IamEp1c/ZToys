import { TestBed } from '@angular/core/testing';

import { ZToysService } from './ztoys.service';

describe('ZToysService', () => {
  let service: ZToysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZToysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
