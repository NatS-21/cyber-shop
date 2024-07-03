import {Component} from '@angular/core';
import {StoreService} from "../../services/store/store.service";
import {CartListItemComponent} from "../../components/cart-list-item/cart-list-item.component";
import {InputFieldComponent} from "../../components/input-field/input-field.component";
import {NgForOf} from "@angular/common";
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [
    CartListItemComponent,
    InputFieldComponent,
    NgForOf,
    ButtonComponent
  ],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.css'
})
export class ShoppingCartPageComponent {
  cartItems: any[] = [];
  subtotal: number = 0;
  estimatedTax: number = 50; // Примерная стоимость налога
  estimatedShipping: number = 29; // Примерная стоимость доставки

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.store.cart$.subscribe(cartItems => {
      this.cartItems = cartItems;
      this.calculateSubtotal();
    });
  }

  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  getTotal() {
    return this.subtotal + this.estimatedTax + this.estimatedShipping;
  }

  applyDiscount() {
  }

  checkout() {
    this.store.clearCart()
  }
}
