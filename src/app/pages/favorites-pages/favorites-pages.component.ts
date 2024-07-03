import {Component} from '@angular/core';
import {StoreService} from "../../services/store/store.service";
import {ProductListItemComponent} from "../../components/product-list-item/product-list-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-favorites-pages',
  standalone: true,
  imports: [
    ProductListItemComponent,
    NgForOf
  ],
  templateUrl: './favorites-pages.component.html',
  styleUrl: './favorites-pages.component.css'
})
export class FavoritesPagesComponent {
  favorites: any[] = [];

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.store.favorites$.subscribe(favorites => {
      this.favorites = favorites;
    });
  }
}
