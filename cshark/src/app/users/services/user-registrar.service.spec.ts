import { TestBed, inject } from '@angular/core/testing';

import { UserRegistrarService } from './user-registrar.service';

describe('UserRegistrarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRegistrarService]
    });
  });

  it('should ...', inject([UserRegistrarService], (service: UserRegistrarService) => {
    expect(service).toBeTruthy();
  }));
});
