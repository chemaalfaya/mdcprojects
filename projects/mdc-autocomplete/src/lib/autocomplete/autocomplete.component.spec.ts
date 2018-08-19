import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcAutocomplete } from './autocomplete.component';

describe('AutocompleteComponent', () => {
  let component: MdcAutocomplete;
  let fixture: ComponentFixture<MdcAutocomplete>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdcAutocomplete ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdcAutocomplete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
