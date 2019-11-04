import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faMagic } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faMagic = faMagic;
  @Output() handleSearch = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
