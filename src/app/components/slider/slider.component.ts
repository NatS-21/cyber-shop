import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();

  onSliderChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = Number(target.value);
    this.valueChange.emit(this.value);
  }

  getBackgroundStyle() {
    const percentage = (this.value - this.min) / (this.max - this.min) * 100;
    return `linear-gradient(to right, var(--color-dark-secondary) ${percentage}%, var(--color-light-tertiary) ${percentage}%)`;
  }
}
