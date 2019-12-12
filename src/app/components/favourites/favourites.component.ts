import { Component, OnInit } from '@angular/core';
import { FavouritesService } from 'src/app/services/favourites.service';
import { IBrandData } from 'src/assets/data/mockdata';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favourites: IBrandData[] = [];

  constructor(private favouriteService: FavouritesService) {
    this.favourites = this.favouriteService.returnFavourites();
  }

  ngOnInit() {}

}
