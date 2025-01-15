import { TestBed } from '@angular/core/testing';

import { HttpcodeapiService } from './httpcodeapi.service';

describe('HttpcodeapiService', () => {
  let service: HttpcodeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpcodeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
