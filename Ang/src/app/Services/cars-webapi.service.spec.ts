import { TestBed } from '@angular/core/testing';

import { CarsWebapiService } from './cars-webapi.service';

describe('CarsWebapiService', () => {
  let service: CarsWebapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsWebapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
