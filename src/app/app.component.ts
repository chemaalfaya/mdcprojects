import { Component, ViewChild } from '@angular/core';
import { Observable, of, from, concat, interval } from 'rxjs';
import { delay, mergeMap, map, shareReplay } from 'rxjs/operators';
// import { concatMap, delay } from 'rxjs/internal/operators';
import { MdcAutocomplete } from '../../projects/mdc-autocomplete/src/lib/autocomplete/autocomplete.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('autocomplete') autocomplete: MdcAutocomplete;
  title = 'app';
  items: Observable<any>;

  constructor() {
    const myItems = [1, 2, 3, 4, 5, 6];
    this.items = new Observable<any>((observer) => {
      setTimeout(() => {
        observer.next(myItems);
      }, 2000);
    });
  }

  onItemSelected(event: Event) {
    console.log('app:' + event);
    this.autocomplete.value = 'Hola';
  }

  getItems(): Observable<any> {
    const myItems = [1, 2, 3, 4, 5, 6];
    // const myObservable = of(null);
    // return of(myItems);
    // return <Observable<Array<Number>>>from(myItems).pipe(
    //   concatMap(item => of(item).pipe( delay(1000) ))
    // );
    // const observableItems = merge(
    //   myObservable.pipe(
    //     mapTo(myItems),
    //     delay(1000)
    //   )
    // );
    // return of(myItems).pipe(delay(1000));
    // return from(myItems).pipe(delay(1000));

    return of([1, 2, 3, 4, 5, 6]).pipe(delay(2000));
  }
}
