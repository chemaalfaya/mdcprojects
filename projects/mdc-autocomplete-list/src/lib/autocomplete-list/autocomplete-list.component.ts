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
    if (v) {
      this.focusFirstItem();
    } else {
      this.unfocusAllItems();
    }
  }

  public get filter(): string {
    return this._filter;
  }

  public set filter(f: string) {
    this._filter = f;
    this.filterItems();
    this.focusFirstItem();
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
          // console.log('autocomplete-list.onItemClicked -> ' + itemValue);
          this.itemSelected.next(itemValue);
        });
      }

      if (item.itemHovered.observers.length === 0) { // Only allow one subscription
        item.itemHovered.subscribe((itemValue) => {
          this.unfocusAllItems();
          item.focused = true;
        });
      }
    });
  }

  public unfocusAllItems() {
    this.autocompleteListItems.toArray().forEach((item) => {
      item.focused = false;
    });
  }

  public focusNextItem() {
    const focusedItems = this.autocompleteListItems.filter((item, index, list) => item.focused);
    const focusedItem = focusedItems.length > 0 ? focusedItems[0] : null;
    const visibleItems = this.autocompleteListItems.filter((item, index, list) => item.visible);

    if (focusedItem) {
      const focusedItemIndex = visibleItems.indexOf(focusedItem);
      const nextFocusedItem = (visibleItems.length >= focusedItemIndex + 1) ? visibleItems[focusedItemIndex + 1] : null;
      if (nextFocusedItem) {
        focusedItem.focused = false;
        nextFocusedItem.focused = true;
        nextFocusedItem.scrollIntoView();
      }
    } else {
      if (visibleItems.length > 0) {
        visibleItems[0].focused = true;
      }
    }
  }

  public focusPreviousItem() {
    const focusedItems = this.autocompleteListItems.filter((item, index, list) => item.focused);
    const focusedItem = focusedItems.length > 0 ? focusedItems[0] : null;
    const visibleItems = this.autocompleteListItems.filter((item, index, list) => item.visible);

    if (focusedItem) {
      const focusedItemIndex = visibleItems.indexOf(focusedItem);
      const previousFocusedItem = (focusedItemIndex > 0) ? visibleItems[focusedItemIndex - 1] : null;
      if (previousFocusedItem) {
        focusedItem.focused = false;
        previousFocusedItem.focused = true;
        previousFocusedItem.scrollIntoView();
      }
    } else {
      if (visibleItems.length > 0) {
        visibleItems[0].focused = true;
      }
    }
  }

  public focusFirstItem() {
    this.unfocusAllItems();
    const visibleItems = this.autocompleteListItems.filter((item, index, list) => item.visible);
    if (visibleItems.length > 0) {
      visibleItems[0].focused = true;
    }
  }

  public selectFocusedItem() {
    const focusedItems = this.autocompleteListItems.filter((item, index, list) => item.focused);
    const focusedItem = focusedItems.length > 0 ? focusedItems[0] : null;

    if (focusedItem) {
      this.itemSelected.next(focusedItem.value);
    }
  }

  private filterItems() {
    let showing = 0;
    this.autocompleteListItems.forEach((item, index, list) => {
      if (showing < this.maxVisibleItems && item.filterString.toUpperCase().includes(this._filter.toUpperCase())) {
        item.visible = true;
        showing++;
      } else {
        item.visible = false;
        item.focused = false;
      }
    });
  }
}
