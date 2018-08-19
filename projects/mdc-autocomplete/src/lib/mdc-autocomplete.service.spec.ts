import { TestBed, inject } from '@angular/core/testing';

import { MdcAutocompleteService } from './mdc-autocomplete.service';

describe('MdcAutocompleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdcAutocompleteService]
    });
  });

  it('should be created', inject([MdcAutocompleteService], (service: MdcAutocompleteService) => {
    expect(service).toBeTruthy();
  }));
});
