import { Component, OnInit } from '@angular/core';
import { IBrandData, testFentyData } from "src/assets/data/mockdata";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  products: IBrandData[] = testFentyData;
  altText = "card image";

  constructor() { }

  ngOnInit() {
  }

}
