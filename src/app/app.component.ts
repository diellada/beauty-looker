import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'makeup-ng-app';
  searchValue: string;

  searchProduct(search: string): string {
    return this.searchValue = search;
  }
}
