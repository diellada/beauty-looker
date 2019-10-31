import { Component, OnInit, Input } from '@angular/core';
import { IBrandData } from "src/assets/data/mockdata";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: IBrandData;

  // i = 0;
  // testData:IBrandData = {
  //   brand: fentyProducts[this.i].brand,
  //   name: fentyProducts[this.i].name,
  //   price: fentyProducts[this.i].price,
  //   poster: fentyProducts[this.i].image_link,
  //   productLink: fentyProducts[this.i].product_link,
  //   category: fentyProducts[this.i].category,
  //   productType: fentyProducts[this.i].product_type,
  //   description: fentyProducts[this.i].description
  // };
  
  // cardImage = this.testData.poster;
  // name = this.testData.name;
  // brand = this.testData.brand;

  constructor() { }

  ngOnInit() {
  }

}
