import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  // @Output() handleSearch = new EventEmitter();

  faSearch = faSearch;

  constructor(private searchbarService: SearchBarService) { }

  ngOnInit() {
  }

  handleSearch(search: string): void {
      this.searchbarService.receiveSearch(search);
  }

}
