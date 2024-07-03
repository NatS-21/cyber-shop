import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  styleUrls: ['./button.component.css'],
  imports: [CommonModule, IconComponent]
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary-dark' | 'secondary-light' | 'settings' = 'primary';
  @Input() size: 'small' | 'large' = 'small';
  @Input() iconName?: string;
  @Output() action = new EventEmitter<void>();

  handleClick() {
    this.action.emit();
  }
}
