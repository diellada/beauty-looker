import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MakeupService {

  constructor(private httpClient: HttpClient) { }
  searchBrand:string = "fenty";
  url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.searchBrand}`;

  getBrands(searchVal: string) {
    return this.httpClient
    .get(this.url).toPromise().then(data => data).catch();
  }
}
