import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from '../icon/icon.component';
import {Router} from "@angular/router";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
  standalone: true,
  imports: [CommonModule, IconComponent]
})
export class CategoryCardComponent {
  @Input() iconName: string = '';
  @Input() label: string = '';
  @Input() categoryId: string = '';

  constructor(private router: Router) {
  }

  handleClick() {
    this.router.navigate([`category/${this.categoryId}`]);
  }
}
