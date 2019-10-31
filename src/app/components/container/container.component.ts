import { Component, OnInit } from '@angular/core';
import { IBrandData, testFentyData } from "src/assets/data/mockdata";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  products: IBrandData[] = testFentyData;

  searchBrand:string = "maybelline";

  altText = "card image";

  url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.searchBrand}`;

  constructor() { }

  ngOnInit() {
  }

}
