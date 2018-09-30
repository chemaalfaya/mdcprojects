import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MdcAutocomplete } from '../../projects/mdc-autocomplete/src/lib/autocomplete/autocomplete.component';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild('autocomplete') autocomplete: MdcAutocomplete;
  title = 'app';
  items: Observable<any>;
  selectedItem: any;

  constructor() {
    const myItems = [
      new Item('Line', 'https://png.icons8.com/material/50/000000/line.png'),
      new Item('Add Link', 'https://png.icons8.com/material/50/000000/add-link.png'),
      new Item('Broken Link', 'https://png.icons8.com/material/50/000000/broken-link.png'),
      new Item('Delete Link', 'https://png.icons8.com/material/50/000000/delete-link.png'),
      new Item('Website', 'https://png.icons8.com/material/50/000000/website.png'),
      new Item('Link', 'https://png.icons8.com/material/50/000000/link.png'),
      new Item('Message Link', 'https://png.icons8.com/material/50/000000/message-link.png'),
      new Item('Linking', 'https://png.icons8.com/material/50/000000/linking.png'),
      new Item('Open in browser', 'https://png.icons8.com/material/50/000000/open-in-browser.png'),
      new Item('Delicious', 'https://png.icons8.com/material/50/000000/delicious.png'),
    ];
    this.items = new Observable<any>((observer) => {
      setTimeout(() => {
        observer.next(myItems);
      }, 100);
    });
  }

  onItemSelected(item: any) {
    this.selectedItem = item;
    // this.autocomplete.value = '';
  }

  getItems(): Observable<any> {
    return this.items;
  }
}
