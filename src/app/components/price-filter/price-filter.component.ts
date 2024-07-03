import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DoubleSliderComponent } from '../double-slider/double-slider.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css'],
  standalone: true,
  imports: [
    DoubleSliderComponent,
    InputFieldComponent,
    FormsModule
  ]
})
export class PriceFilterComponent implements OnChanges {
  @Input() min: number = 0;
  @Input() max: number = 10000;
  valueMin: number;
  valueMax: number;

  constructor() {
    this.valueMin = this.min;
    this.valueMax = this.max;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['min']) {
      this.valueMin = changes['min'].currentValue;
    }
    if (changes['max']) {
      this.valueMax = changes['max'].currentValue;
    }
  }

  onMinValueChange(value: number) {
    this.valueMin = value;
    this.onSliderMinChange(value);
  }

  onMaxValueChange(value: number) {
    this.valueMax = value;
    this.onSliderMaxChange(value);
  }

  onSliderMinChange(value: number) {
    this.valueMin = value;
  }

  onSliderMaxChange(value: number) {
    this.valueMax = value;
  }
}
