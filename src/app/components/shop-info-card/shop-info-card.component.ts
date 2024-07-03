import {Component, Input} from '@angular/core';
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-shop-info-card',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './shop-info-card.component.html',
  styleUrl: './shop-info-card.component.css'
})
export class ShopInfoCardComponent {
  @Input() iconName: string = '';
  @Input() title: string = '';
  @Input() value: string = '';
}
