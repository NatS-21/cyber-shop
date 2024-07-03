import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  standalone: true,
  imports: [
    NgClass
  ],
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  @Output() selectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleSelection() {
    if (!this.disabled) {
      this.selected = !this.selected;
      this.selectedChange.emit(this.selected);
    }
  }
}
