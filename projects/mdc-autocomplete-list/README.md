# MdcAutocomplete

[![npm version](https://badge.fury.io/js/mdc-autocomplete.svg)](https://badge.fury.io/js/mdc-autocomplete)

MdcAutocomplete in conjunction with MdcAutocompleteList and MdcAutocompleteListItem are a pack of angular components to provide an autocomplete functionality to [Angular MDC](https://trimox.github.io/angular-mdc-web/#/home) web.

You can [get started](https://trimox.github.io/angular-mdc-web/#/getting-started) with Angular MDC in its webpage or in its [GitHub page](https://github.com/trimox/angular-mdc-web).

![Demonstration Gif](https://raw.githubusercontent.com/chemaalfaya/mdcprojects/master/src/assets/mdc-autocomplete.gif "Demonstration Gif")

### Features
* Live **filtering** while writting
* **Mouse hover** and selection
* Selection using **arrows** and **enter** keys
* Customizable **max results** number
* OnSelection **event emission**

## <a name="installation"></a> Install Angular MdcAutocomplete
Assuming you already have angular-mdc-web up and running, install mdc-autocomplete by executing the following command:

```
npm i mdc-autocomplete-list-item mdc-autocomplete-list mdc-autocomplete
```

## <a name="getstarted"></a> Getting started
In your angular module:

	import { MdcAutocompleteModule } from 'mdc-autocomplete';
	import { MdcAutocompleteListModule } from 'mdc-autocomplete-list';
	import { MdcAutocompleteListItemModule } from 'mdc-autocomplete-list-item';
	
	@NgModule({
	  ...
	  imports: [
	    ...
	    MdcAutocompleteModule,
	    MdcAutocompleteListModule,
	    MdcAutocompleteListItemModule
	  ],
	  ...
	})

In your angular component html file:

	<mdc-autocomplete (itemSelected)="onAutocompleteItemSelected($event)">
		<mdc-autocomplete-list [maxVisibleItems]="10">
    		<mdc-autocomplete-list-item *ngFor="let item of getItems() | async" [value]="item" [filterString]="item.name">
	    		<img class="item-icon" src="{{item.icon}}"/>
    			<span class="item-name">{{item.name}}</span>
      		</mdc-autocomplete-list-item>
    	</mdc-autocomplete-list>
	</mdc-autocomplete>


## Development

Feel free to contribute and improve this component library.

Clone the repository:

```
git clone https://github.com/chemaalfaya/mdcprojects.git
```

While developing, in order to see the changes you made in your served app, don't forget to build the project you have modified:

	cd projects
	ng build mdc-autocomplete-list-item
	ng build mdc-autocomplete-list
	ng build mdc-autocomplete

And... happy coding!


## License

(The ISC License)

Copyright (c) 2018 Chema Alfaya Montero &lt;chemaalfaya@gmail.com&gt;

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.