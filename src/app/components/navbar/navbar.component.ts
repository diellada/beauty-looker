import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() handleSearch = new EventEmitter();
  @Output() showFavourites = new EventEmitter();
  faMagic = faMagic;
  faHeart = faHeart;

  constructor() { }

  ngOnInit() {
  }

}
