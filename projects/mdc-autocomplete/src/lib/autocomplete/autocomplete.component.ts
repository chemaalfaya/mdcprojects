import { Component, OnInit, ViewChild, ContentChild, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { MdcTextField } from '@angular-mdc/web';
import { MdcAutocompleteList } from 'mdc-autocomplete-list';

@Component({
  selector: 'mdc-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.sass']
})
// tslint:disable-next-line:component-class-suffix
export class MdcAutocomplete implements OnInit, AfterContentInit {

  @Output() public itemSelected: EventEmitter<any> = new EventEmitter();

  @ViewChild('textField') textField: MdcTextField;
  @ContentChild(MdcAutocompleteList) autocompleteList: MdcAutocompleteList;

  _value: string;
  public get value(): string { return this._value; }
  public set value(val: string) {
    this._value = val;
    this.autocompleteList.filter = val;
  }

  selectedItemValue: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.setNativeInputAtrributes();

    this.autocompleteList.itemSelected.subscribe((itemValue) => {
      this.selectedItemValue = itemValue;
      this.value = itemValue.toString();
      this.itemSelected.emit(itemValue);
      this.autocompleteList.visible = false;
    });
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.autocompleteList.focusNextItem();
    } else if (event.key === 'ArrowUp') {
      this.autocompleteList.focusPreviousItem();
    } else if (event.key === 'Enter') {
      this.autocompleteList.selectFocusedItem();
    }
  }
  onKeyUp(event: KeyboardEvent) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'Enter') {
      this.onTextFieldChange();
    }
  }

  onTextFieldChange() {
    this.autocompleteList.visible = true;
    this.autocompleteList.filter = this.textField.value;
  }

  onFocus(focus: boolean) {
    setTimeout(() => {
      this.autocompleteList.visible = focus;
    }, 100);
  }

  private setNativeInputAtrributes() {
    const nativeInput: HTMLInputElement = this.textField.elementRef.nativeElement.querySelector('input');
    nativeInput.autocomplete = 'off';
    // @ts-ignore
    nativeInput.autocorrect = 'off';
    // @ts-ignore
    nativeInput.autocapitalize = 'off';
  }
}
