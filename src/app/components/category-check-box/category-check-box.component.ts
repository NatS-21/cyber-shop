import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {CheckBoxComponent} from "../check-box/check-box.component";

@Component({
  selector: 'app-category-check-box',
  templateUrl: './category-check-box.component.html',
  standalone: true,
  imports: [
    CheckBoxComponent
  ],
  styleUrls: ['./category-check-box.component.css']
})
export class CategoryCheckBoxComponent {
  @Input({transform: booleanAttribute}) checked: boolean = false;
  @Input() label: string = '';
  @Input() count: number = 0;
  @Output() action = new EventEmitter<void>();

  toggle() {
    this.checked = !this.checked;
    this.action.emit()
  }
}
