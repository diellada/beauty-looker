import { Injectable } from '@angular/core';
import { IBrandData } from 'src/assets/data/mockdata';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor() { }

  favouriteProducts: IBrandData[] = [];

  addToFavourites(favProduct: IBrandData): IBrandData[] {
    this.favouriteProducts.push(favProduct);
    return this.favouriteProducts;
  }

  removeFromFavourites(favProduct: IBrandData): IBrandData[] {
    const index = this.favouriteProducts.indexOf(favProduct);
    this.favouriteProducts.splice(index, 1);
    return this.favouriteProducts;
  }

  returnFavourites() {
    return this.favouriteProducts;
  }
}
