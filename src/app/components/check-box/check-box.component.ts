import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  standalone: true,
  styleUrls: ['./check-box.component.css'],
  imports: [CommonModule]
})
export class CheckBoxComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleChecked() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
