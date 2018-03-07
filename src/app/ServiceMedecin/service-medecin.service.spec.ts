import { TestBed, inject } from '@angular/core/testing';

import { ServiceMedecinService } from './service-medecin.service';

describe('ServiceMedecinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceMedecinService]
    });
  });

  it('should be created', inject([ServiceMedecinService], (service: ServiceMedecinService) => {
    expect(service).toBeTruthy();
  }));
});
