import { TestBed, inject } from '@angular/core/testing';

import { NgxDecoratorsService } from './ngx-decorators.service';

describe('NgxDecoratorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxDecoratorsService]
    });
  });

  it('should be created', inject([NgxDecoratorsService], (service: NgxDecoratorsService) => {
    expect(service).toBeTruthy();
  }));
});
