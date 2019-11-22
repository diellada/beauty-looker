import { Component } from '@angular/core';
import { SearchBarService } from 'src/app/services/search-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'makeup-ng-app';
  searchValue: string;

  constructor(private searchbarService: SearchBarService, private router: Router) {}

  searchProduct(search: string): string {
    return this.searchValue = search;
  }

  passSearch(): void {
    return this.searchbarService.receiveSearch(this.searchValue);
  }

  acceptSearch() {
    this.router.navigateByUrl("/products", {state: {searchStr: this.searchValue}});
    console.log(history.state);
    console.log(this.router.getCurrentNavigation().extras.state);
  }
}
