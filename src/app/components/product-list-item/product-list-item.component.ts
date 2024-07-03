import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ButtonComponent} from "../button/button.component";
import {StoreService} from "../../services/store/store.service";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent
  ],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
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
