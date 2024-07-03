import {Component, Input} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {ProductLibraryComponent} from "../../components/product-library/product-library.component";
import {DetailCardComponent} from "../../components/detail-card/detail-card.component";
import {ButtonComponent} from "../../components/button/button.component";
import {ShopInfoCardComponent} from "../../components/shop-info-card/shop-info-card.component";
import {StoreService} from "../../services/store/store.service";

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ProductLibraryComponent,
    DetailCardComponent,
    ButtonComponent,
    ShopInfoCardComponent
  ],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css'
})
export class ProductDetailsPageComponent {
  product: any = null;

  constructor(protected apiService: ApiService, private route: ActivatedRoute, private store: StoreService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      if (productId) {
        this.apiService.getProductById(productId).subscribe(data => {
          let fixedImages = []
          for (const image of data.images) {
            fixedImages.push(this.apiService.getImage(image));
          }
          data.images = fixedImages;
          this.product = data;
        });
      }
    });
  }

  getCharacteristicValue(characteristic: any): string {
    return characteristic.unit_type === 'значение' ? characteristic.value : `${characteristic.value} ${characteristic.unit_type}`;
  }

  addToWishList() {
    this.store.addToFavorites(this.product)
  }

  addToCart() {
    this.store.addToCart(this.product)
  }
}
