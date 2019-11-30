import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  // private search: Subject<string> = new Subject<string>();

  constructor() { }

  receiveSearch(val: string) {
    console.log(val + "here first");
    // return this.search.next(val);
  }

  getSearch() {
    console.log("here");
    // return this.search.asObservable();
  }
}
