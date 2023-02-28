import { TestBed } from '@angular/core/testing';

import { ShowTrendingService } from './show-trending.service';

describe('ShowTrendingService', () => {
  let service: ShowTrendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowTrendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
