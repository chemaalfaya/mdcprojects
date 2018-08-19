import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdcAutocompleteModule } from 'mdc-autocomplete';
import { MdcAutocompleteListModule } from 'mdc-autocomplete-list';
import { MdcAutocompleteListItemModule } from 'mdc-autocomplete-list-item';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdcAutocompleteModule,
    MdcAutocompleteListModule,
    MdcAutocompleteListItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
