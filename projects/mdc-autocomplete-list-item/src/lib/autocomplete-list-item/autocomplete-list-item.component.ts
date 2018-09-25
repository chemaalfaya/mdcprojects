import { Component, OnInit, Input, Output } from '@angular/core';
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
  @Output() public itemClicked: Subject<any> = new Subject();

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

  onItemClicked() {
    console.log('autocomplete-list-item.onItemClicked -> ' + this.value);
    this.itemClicked.next(this.value);
  }

}
