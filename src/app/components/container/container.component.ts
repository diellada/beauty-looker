import { Component, OnInit, Input } from '@angular/core';
import { IBrandData, testFentyData } from "src/assets/data/mockdata";
import { MakeupService } from 'src/app/services/makeup.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  
  @Input() search: string;
  products: IBrandData[]
  filteredProducts: IBrandData[];
  favouriteProducts: IBrandData[] = [];
  altText = "card image";

  constructor(private makeupService: MakeupService) { 
    this.makeupService.getBrands("fenty").then((data: IBrandData[]) => {
      console.log(data);
      this.products = data;
      this.filteredProducts = this.products;
    });
  }

  ngOnInit() { }

  searchProducts() {
    console.log(this.search);
  };

  addToFavourites(favProduct: IBrandData) {
    return this.favouriteProducts.push(favProduct);
  };

  removeFromFavourites(favProduct: IBrandData) {
    this.favouriteProducts = this.favouriteProducts.filter(prod => {
      return prod != favProduct;
    });
  };

  filterFavourites() {
    return this.filteredProducts = this.favouriteProducts;
  }
}
