import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SearchFieldComponent} from "../search-field/search-field.component";
import {NgForOf, NgIf} from "@angular/common";
import {ApiService} from "../../services/api/api.service";
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    SearchFieldComponent,
    NgIf,
    ProductListItemComponent,
    NgForOf
  ],
  standalone: true
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  searchTerm: string = '';
  searchResults: any[] = [];
  showDropdown: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  onSearchTermChange(newTerm: string) {
    this.searchTerm = newTerm;
    if (this.searchTerm.length > 0) {
      this.apiService.getAllProducts().subscribe(products => {
        this.searchResults = products
          .filter(product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
          .slice(0, 10);
        this.showDropdown = this.searchResults.length > 0;
      });
    } else {
      this.showDropdown = false;
      this.searchResults = [];
    }
  }
}
