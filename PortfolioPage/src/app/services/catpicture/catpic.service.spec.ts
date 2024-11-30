import { TestBed } from '@angular/core/testing';

import { CatpicService } from './catpic.service';

describe('CatpicService', () => {
  let service: CatpicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatpicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
