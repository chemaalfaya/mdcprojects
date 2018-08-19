import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcAutocompleteList } from './autocomplete-list.component';

describe('AutocompleteListComponent', () => {
  let component: MdcAutocompleteList;
  let fixture: ComponentFixture<MdcAutocompleteList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdcAutocompleteList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdcAutocompleteList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
