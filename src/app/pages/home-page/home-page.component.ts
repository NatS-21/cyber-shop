import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {ProductCardComponent} from "../../components/product-card/product-card.component";
import {CategoryCardComponent} from "../../components/category-card/category-card.component";
import {CommonModule, NgForOf} from "@angular/common";
import {ButtonComponent} from "../../components/button/button.component";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    CategoryCardComponent,
    NgForOf,
    ButtonComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  newArrivals: any[] = [];
  bestsellers: any[] = [];
  featuredProducts: any[] = [];
  selectedProducts: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getAllProducts().subscribe(products => {
      this.newArrivals = products.slice(0, 8);
      this.bestsellers = products.slice(8, 16);
      this.featuredProducts = products.slice(16, 24);
      this.openProductsTab(0)
    });
  }

  openProduct(productId: number): void {
    this.router.navigate([`product/${productId}`]);
  }

  openProductsTab(tabId: number): void {
    switch (tabId) {
      case 0:
        this.selectedProducts = this.newArrivals
        break
      case 1:
        this.selectedProducts = this.bestsellers
        break
      case 2:
        this.selectedProducts = this.featuredProducts
        break
    }
  }
}
