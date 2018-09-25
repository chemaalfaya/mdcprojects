import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'mdc-autocomplete-list-item',
  templateUrl: './autocomplete-list-item.component.html',
  styleUrls: ['./autocomplete-list-item.component.sass']
})
// tslint:disable-next-line:component-class-suffix
export class MdcAutocompleteListItem implements OnInit {

  @Input() value: any;
  @Input() filterString: string;
  @Input() focused: boolean;
  @Output() public itemClicked: Subject<any> = new Subject();

  @ViewChild('li') li: ElementRef;

  private _visible: boolean;

  public get visible(): boolean {
    return this._visible;
  }

  public set visible(v: boolean) {
    this._visible = v;
  }

  constructor() {
    this._visible = true;
  }

  ngOnInit() {
  }

  public scrollIntoView() {
    this.li.nativeElement.parentElement.scrollIntoView({
      behaviour: 'auto',
      block: 'nearest',
      inline: 'nearest'
    });
  }

  onItemClicked() {
    // console.log('autocomplete-list-item.onItemClicked -> ' + this.value);
    this.itemClicked.next(this.value);
  }

}
