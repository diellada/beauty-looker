import { Component } from '@angular/core';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'makeup-ng-app';
  searchValue: string;

  constructor(private searchbarService: SearchBarService) {}

  // searchProduct(search: string): void {
  //   // return this.searchValue = search;
  //   this.searchbarService.receiveSearch(search);
  // }

  // passSearch(): void {
  //   return this.searchbarService.receiveSearch(this.searchValue);
  // }
}
