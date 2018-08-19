import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcAutocompleteListItemComponent } from './mdc-autocomplete-list-item.component';
import { MdcAutocompleteListItem } from './autocomplete-list-item/autocomplete-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MdcAutocompleteListItemComponent, MdcAutocompleteListItem],
  exports: [MdcAutocompleteListItem]
})
export class MdcAutocompleteListItemModule { }
