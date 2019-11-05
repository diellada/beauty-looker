import { Component, OnInit, Input } from '@angular/core';
import { IBrandData } from "src/assets/data/mockdata";
import { faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOpen } from "@fortawesome/free-regular-svg-icons"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: IBrandData;
  faHeart = faHeartOpen;

  constructor() { }
  ngOnInit() {}

  changeIcon() {
    this.faHeart === faHeartOpen ? this.faHeart = faHeartSolid : this.faHeart = faHeartOpen;
  }

}
