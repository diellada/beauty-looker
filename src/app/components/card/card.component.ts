import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBrandData } from "src/assets/data/mockdata";
import { faHeart as faHeartSolid, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOpen } from "@fortawesome/free-regular-svg-icons"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: IBrandData;
  @Input() inFavourites: boolean = false;
  @Output() addFavourite = new EventEmitter();
  @Output() removeFavourite = new EventEmitter();

  faHeart: IconDefinition = faHeartOpen;

  constructor() {}

  ngOnInit() {
    if (this.inFavourites) {
      this.faHeart = faHeartSolid;
    }
  }

  iconClicked() {
    if (this.faHeart === faHeartOpen) {
      this.faHeart = faHeartSolid;
      this.addFavourite.emit(this.product);
    } else {
      this.faHeart = faHeartOpen;
      this.removeFavourite.emit(this.product);
    }
  }
}
