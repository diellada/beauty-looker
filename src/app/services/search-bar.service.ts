import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  search: Subject<string>;

  constructor() {
    this.search = new Subject<string>();
   }

  receiveSearch(val: string) {
    this.search.next(val);
  }
}
