import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcAutocompleteListItem } from './autocomplete-list-item.component';

describe('AutocompleteListItemComponent', () => {
  let component: MdcAutocompleteListItem;
  let fixture: ComponentFixture<MdcAutocompleteListItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdcAutocompleteListItem ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdcAutocompleteListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
