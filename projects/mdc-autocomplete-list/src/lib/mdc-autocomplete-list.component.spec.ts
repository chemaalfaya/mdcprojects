import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcAutocompleteListComponent } from './mdc-autocomplete-list.component';

describe('MdcAutocompleteListComponent', () => {
  let component: MdcAutocompleteListComponent;
  let fixture: ComponentFixture<MdcAutocompleteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdcAutocompleteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdcAutocompleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
