import { TestBed } from '@angular/core/testing';

import { ArNLPService } from './ar-nlp.service';

describe('ArNLPService', () => {
  let service: ArNLPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArNLPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
