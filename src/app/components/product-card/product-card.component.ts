import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from '../button/button.component';
import {Router} from "@angular/router";
import {StoreService} from "../../services/store/store.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  isFavorite: boolean = false;

  constructor(private router: Router, private store: StoreService) {
  }

  ngOnInit() {
    this.isFavorite = this.store.isFavorite(this.product.id);
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.store.addToFavorites(this.product);
    } else {
      this.store.removeFromFavorites(this.product);
    }
  }

  buyProduct() {
    this.router.navigate([`product/${this.product.id}`]);
  }
}
