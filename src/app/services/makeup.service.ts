import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IBrandData } from 'src/assets/data/mockdata';

@Injectable({
  providedIn: 'root'
})
export class MakeupService {

  constructor(private httpClient: HttpClient) { }

  getBrands(searchBrand: string) {
    return this.httpClient
    .get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchBrand}`).toPromise().then(data => data)
    .catch();
  }

  getTags(searchTag: string) {
    return this.httpClient
    .get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=${searchTag}`)
    .toPromise()
    .then((tagProducts: IBrandData[]) => {
      console.log(tagProducts);
      console.log(tagProducts[0].tag_list);
    })
    .catch();
  }
}
