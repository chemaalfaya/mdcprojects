import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcAutocompleteComponent } from './mdc-autocomplete.component';

describe('MdcAutocompleteComponent', () => {
  let component: MdcAutocompleteComponent;
  let fixture: ComponentFixture<MdcAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdcAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdcAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
