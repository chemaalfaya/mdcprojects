import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcAutocompleteListComponent } from './mdc-autocomplete-list.component';
import { MdcAutocompleteList } from './autocomplete-list/autocomplete-list.component';
import { MdcAutocompleteListItemModule } from 'mdc-autocomplete-list-item';
import { MdcElevationModule } from '@angular-mdc/web';

@NgModule({
  imports: [
    CommonModule,
    MdcAutocompleteListItemModule,
    MdcElevationModule
  ],
  declarations: [MdcAutocompleteListComponent, MdcAutocompleteList],
  exports: [MdcAutocompleteList]
})
export class MdcAutocompleteListModule { }
