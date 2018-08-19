import { TestBed, inject } from '@angular/core/testing';

import { MdcAutocompleteListService } from './mdc-autocomplete-list.service';

describe('MdcAutocompleteListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdcAutocompleteListService]
    });
  });

  it('should be created', inject([MdcAutocompleteListService], (service: MdcAutocompleteListService) => {
    expect(service).toBeTruthy();
  }));
});
