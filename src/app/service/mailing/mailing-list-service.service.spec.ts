import { TestBed } from '@angular/core/testing';
import {MailingListService} from "./mailing-list-service.service";


describe('MailingListServiceService', () => {
  let service: MailingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
