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
  altText = "card image";

  constructor(private makeupService: MakeupService) { 
    this.makeupService.getBrands("fenty").then((data: IBrandData[]) => {
      console.log(data);
      this.products = data;
    });
  }

  ngOnInit() { }

  searchProducts() {
    console.log(this.search);
  }
}
