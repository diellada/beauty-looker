import { Component, OnInit, Input } from '@angular/core';
import { IBrandData } from "src/assets/data/mockdata";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: IBrandData;

  constructor() { }

  ngOnInit() {
  }

}
