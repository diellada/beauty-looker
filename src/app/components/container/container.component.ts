import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IBrandData } from "src/assets/data/mockdata";
import { MakeupService } from 'src/app/services/makeup.service';
import { SearchBarService } from 'src/app/services/search-bar.service';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { FavouritesService } from 'src/app/services/favourites.service';

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

  constructor(private makeupService: MakeupService,
              private searchbarService: SearchBarService,
              private router: Router,
              private favouriteService: FavouritesService) {
   }

  ngOnInit() {
    this.subscriptions.push(
    this.searchbarService.search.subscribe((val) => {
      this.inputVal = val;
      this.makeupService.getBrands(val);
      this.updateDisplayedProducts(val);
    }));

    this.makeupService.getBrands(this.inputVal).then((data: IBrandData[]) => {
      this.products = data;
      return this.filteredProducts = this.products;
    });
  }

  updateDisplayedProducts(inputVal: string) {
    this.makeupService.getBrands(inputVal).then((data: IBrandData[]) => {
      return this.filteredProducts = data;
    });
  }

  addFavourite(favProduct: IBrandData) {
    this.favouriteProducts = this.favouriteService.addToFavourites(favProduct);
  }

  removeFavourite(favProduct: IBrandData) {
    this.favouriteProducts = this.favouriteService.removeFromFavourites(favProduct);
  }

  filterFavourites(): IBrandData[] {
    return this.filteredProducts = this.favouriteProducts;
  }
}
