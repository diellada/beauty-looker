import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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

  constructor(private makeupService: MakeupService) { }

  ngOnInit() { }
  
  ngOnChanges(change: SimpleChanges){
    this.searchProducts(change.search.currentValue);
  }

  searchProducts(inputValue) {
    this.makeupService.getBrands(String(inputValue)).then((data: IBrandData[]) => {
      this.products = data;
      return this.filteredProducts = this.products;
    });
  };

  addToFavourites(favProduct: IBrandData) {
    return this.favouriteProducts.push(favProduct);
  };

  removeFromFavourites(favProduct: IBrandData) {
    this.favouriteProducts = this.favouriteProducts.filter((prod: IBrandData) => {
      return prod != favProduct;
    });
  };

  filterFavourites(): IBrandData[] {
    return this.filteredProducts = this.favouriteProducts;
  }
}
