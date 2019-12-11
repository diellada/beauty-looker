import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IBrandData, testFentyData } from "src/assets/data/mockdata";
import { MakeupService } from 'src/app/services/makeup.service';
import { SearchBarService } from 'src/app/services/search-bar.service';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

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
  inputVal: string = "nyx";
  subscriptions: Subscription[] = [];

  constructor(private makeupService: MakeupService, private searchbarService: SearchBarService, private router: Router) {
   }

  ngOnInit() {
    this.subscriptions.push(
    this.searchbarService.search.subscribe((val) => {
      this.inputVal = val;
      console.log(this.inputVal);
      this.makeupService.getBrands(val);
      this.updateDisplayedProducts(val);
    }));

    this.makeupService.getBrands(this.inputVal).then((data: IBrandData[]) => {
      this.products = data;
      console.log(this.inputVal);
      return this.filteredProducts = this.products;
    });
  }

  updateDisplayedProducts(inputVal: string) {
    this.makeupService.getBrands(inputVal).then((data: IBrandData[]) => {
      console.log(inputVal);
      return this.filteredProducts = data;
    });
  }

  addToFavourites(favProduct: IBrandData) {
    return this.favouriteProducts.push(favProduct);
  }

  removeFromFavourites(favProduct: IBrandData) {
    this.favouriteProducts = this.favouriteProducts.filter((prod: IBrandData) => {
      return prod != favProduct;
    });
  }

  filterFavourites(): IBrandData[] {
    return this.filteredProducts = this.favouriteProducts;
  }
}
