import { Component, Input } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  standalone: true,
  imports: [
    NgClass
  ],
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent {
  @Input() selected: boolean = false;

  toggle() {
    this.selected = !this.selected;
  }
}
