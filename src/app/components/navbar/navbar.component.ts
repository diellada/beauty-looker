import { Component, OnInit } from '@angular/core';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faMagic = faMagic;
  faSearch = faSearch;
  constructor() { }

  ngOnInit() {
  }

}
