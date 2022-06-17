import { TestBed } from '@angular/core/testing';


import { SchoolMService } from './school-m.service';

describe('SchoolMService', () => {
  let service: SchoolMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
