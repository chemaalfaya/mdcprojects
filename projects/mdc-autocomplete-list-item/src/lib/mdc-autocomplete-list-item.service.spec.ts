import { TestBed, inject } from '@angular/core/testing';

import { MdcAutocompleteListItemService } from './mdc-autocomplete-list-item.service';

describe('MdcAutocompleteListItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdcAutocompleteListItemService]
    });
  });

  it('should be created', inject([MdcAutocompleteListItemService], (service: MdcAutocompleteListItemService) => {
    expect(service).toBeTruthy();
  }));
});
