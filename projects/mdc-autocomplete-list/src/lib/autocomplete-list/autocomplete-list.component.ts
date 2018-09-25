import { Component, OnInit, ContentChildren, QueryList, Input, Output, AfterContentChecked } from '@angular/core';
import { MdcAutocompleteListItem } from 'mdc-autocomplete-list-item';
import { Subject } from 'rxjs';

@Component({
  selector: 'mdc-autocomplete-list',
  templateUrl: './autocomplete-list.component.html',
  styleUrls: ['./autocomplete-list.component.sass']
})
// tslint:disable-next-line:component-class-suffix
export class MdcAutocompleteList implements OnInit, AfterContentChecked {

  @Input() maxVisibleItems: number;
  @Output() public itemSelected: Subject<any> = new Subject();

  @ContentChildren(MdcAutocompleteListItem) autocompleteListItems:  QueryList<MdcAutocompleteListItem>;
  _visible: boolean;
  _filter: string;

  public get visible(): boolean {
    return this._visible;
  }

  public set visible(v: boolean) {
    this._visible = v;
  }

  public get filter(): string {
    return this._filter;
  }

  public set filter(f: string) {
    this._filter = f;
    this.filterItems();
  }

  constructor() {
    this.maxVisibleItems = Number.POSITIVE_INFINITY;
    this._visible = false;
    this._filter = undefined;
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.autocompleteListItems.toArray().forEach((item) => {
      if (item.itemClicked.observers.length === 0) { // Only allow one subscription
        item.itemClicked.subscribe((itemValue) => {
          console.log('autocomplete-list.onItemClicked -> ' + itemValue);
          this.itemSelected.next(itemValue);
        });
      }
    });
  }

  private filterItems() {
    let showing = 0;
    this.autocompleteListItems.forEach((item, index, list) => {
      if (showing < this.maxVisibleItems && item.filterString.toUpperCase().includes(this._filter.toUpperCase())) {
        item.visible = true;
        showing++;
      } else {
        item.visible = false;
      }
    });
  }

}
