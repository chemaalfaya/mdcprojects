import { NgModule } from '@angular/core';
import { MdcAutocompleteComponent } from './mdc-autocomplete.component';
import { MdcAutocomplete } from './autocomplete/autocomplete.component';
import { MdcAutocompleteListModule } from 'mdc-autocomplete-list';
import { MdcAutocompleteListItemModule } from 'mdc-autocomplete-list-item';
import { MdcTextFieldModule } from '@angular-mdc/web';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MdcAutocompleteListModule,
    MdcAutocompleteListItemModule,
    MdcTextFieldModule,
    FormsModule
  ],
  declarations: [MdcAutocompleteComponent, MdcAutocomplete],
  exports: [MdcAutocomplete]
})
export class MdcAutocompleteModule { }
