import { TestBed } from '@angular/core/testing';

import { MailingServiceService } from './mailing-service.service';

describe('MailingServiceService', () => {
  let service: MailingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
