import { Component, OnInit } from "@angular/core";
import { MakeupService } from "src/app/services/makeup.service";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  faChevronDown = faChevronDown;
  searchTag: string = "vegan";
  isOpen: boolean = false;
  tagClicked: string = "";
  tagList: string[] = ["Canadian", "CertClean", "Chemical Free", "Dairy Free",
    "EWG Verified", "EcoCert", "Fair Trade", "Gluten Free", "Hypoallergenic", "Natural",
    "No Talc", "Non-GMO", "Organic", "Peanut Free Product", "Sugar Free", "USDA Organic",
    "Vegan", "alcohol free", "cruelty free", "oil free", "purpicks",
    "silicone free","water free"];

  constructor(private makeupService: MakeupService) {}

  ngOnInit() {}

  getProductTags() {
    this.makeupService.getTags(this.searchTag).then(tags => {
      console.log(tags);
    });
    this.isOpen === true ? this.isOpen = false : this.isOpen = true;
  }
}
