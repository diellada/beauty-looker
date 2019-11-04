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
  
  products: IBrandData[] = testFentyData;
  filteredProducts: IBrandData[];
  altText = "card image";

  constructor(private makeupService: MakeupService) { }

  ngOnInit() { }

  searchProduct() {
    console.log(this.search);

    this.makeupService.getBrands(this.search).then((data) => {
      console.log(data);
    });
  };
}
