import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private cart = new BehaviorSubject<any[]>(this.loadFromLocalStorage('cart'));
  private favorites = new BehaviorSubject<any[]>(this.loadFromLocalStorage('favorites'));

  cart$ = this.cart.asObservable();
  favorites$ = this.favorites.asObservable();

  addToCart(product: any) {
    const currentCart = this.cart.value;
    const existingProduct = currentCart.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      product.quantity = 1;
      currentCart.push(product);
    }

    this.cart.next(currentCart);
    this.saveToLocalStorage('cart', this.cart.value);
  }

  removeFromCart(productId: number) {
    const currentCart = this.cart.value.filter(product => product.id !== productId);
    this.cart.next(currentCart);
    this.saveToLocalStorage('cart', this.cart.value);
  }

  increaseQuantity(productId: number) {
    const currentCart = this.cart.value;
    const product = currentCart.find(p => p.id === productId);

    if (product) {
      product.quantity++;
      this.cart.next(currentCart);
      this.saveToLocalStorage('cart', currentCart);
    }
  }

  decreaseQuantity(productId: number) {
    const currentCart = this.cart.value;
    const product = currentCart.find(p => p.id === productId);

    if (product && product.quantity > 1) {
      product.quantity--;
      this.cart.next(currentCart);
      this.saveToLocalStorage('cart', currentCart);
    } else {
      this.removeFromCart(productId);
    }
  }

  addToFavorites(product: any) {
    const currentFavorites = this.favorites.value;
    this.favorites.next([...currentFavorites, product]);
    this.saveToLocalStorage('favorites', this.favorites.value);
  }

  removeFromFavorites(product: any) { // изменено productId на product
    const currentFavorites = this.favorites.value.filter(p => p.id !== product.id);
    this.favorites.next(currentFavorites);
    this.saveToLocalStorage('favorites', this.favorites.value);
  }

  isFavorite(productId: number): boolean {
    return this.favorites.value.some(product => product.id === productId);
  }

  private saveToLocalStorage(key: string, data: any[]) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  private loadFromLocalStorage(key: string): any[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  clearCart() {
    this.cart.next([]);
    this.saveToLocalStorage('cart', []);
  }
}
