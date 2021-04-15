import { TestBed, inject } from '@angular/core/testing';

import { ProductParamterService } from './product-paramter.service';

describe('ProductParamterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductParamterService]
    });
  });

  it('should be created', inject([ProductParamterService], (service: ProductParamterService) => {
    expect(service).toBeTruthy();
  }));
});
