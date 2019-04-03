import { TestBed, inject } from '@angular/core/testing';

import { ResidenteService } from './residente.service';

describe('ResidenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResidenteService]
    });
  });

  it('should be created', inject([ResidenteService], (service: ResidenteService) => {
    expect(service).toBeTruthy();
  }));
});
