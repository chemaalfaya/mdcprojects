import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcAutocompleteListItemComponent } from './mdc-autocomplete-list-item.component';

describe('MdcAutocompleteListItemComponent', () => {
  let component: MdcAutocompleteListItemComponent;
  let fixture: ComponentFixture<MdcAutocompleteListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdcAutocompleteListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdcAutocompleteListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
