import { TestBed } from '@angular/core/testing';

import { CatfactsService } from './catfacts.service';

describe('CatfactsService', () => {
  let service: CatfactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatfactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
