import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForOf, NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Input() placeholder: string = 'Select';
  @Output() optionSelected = new EventEmitter<string>();
  selectedOption: string | null = null;
  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
    this.optionSelected.emit(option);
  }
}
