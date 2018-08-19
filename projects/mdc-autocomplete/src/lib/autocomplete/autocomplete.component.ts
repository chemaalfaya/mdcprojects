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

  value: string;
  selectedItemValue: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.autocompleteList.itemSelected.subscribe((itemValue) => {
      this.selectedItemValue = itemValue;
      this.value = itemValue.toString();
      this.itemSelected.emit(itemValue);
      this.autocompleteList.visible = false;
    });
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

}
