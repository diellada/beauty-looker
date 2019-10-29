import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  searchBrand:string = "maybelline";

  // cardImage = "../../../assets/blush-brush.jfif";
  altText = "card image";

  url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.searchBrand}`;

  // fetch(url)
  // .then((response) => response.json()) 
  // .then((data) => {  
      
  // })
  // .catch((error) => {
  //     throw new Error(error);
  // });

  constructor() { }

  ngOnInit() {
  }

}
