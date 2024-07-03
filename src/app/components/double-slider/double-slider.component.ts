import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-double-slider',
  templateUrl: './double-slider.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./double-slider.component.css']
})
export class DoubleSliderComponent implements OnChanges {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() valueMin: number = 0;
  @Input() valueMax: number = 100;
  @Output() valueMinChange = new EventEmitter<number>();
  @Output() valueMaxChange = new EventEmitter<number>();

  @ViewChild('track', {static: true}) track!: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['valueMin'] || changes['valueMax']) {
      this.updateTrack();
    }
  }

  onMinSliderChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = Number(target.value);
    if (newValue >= this.valueMax) {
      this.valueMin = this.valueMax - 1;
    } else {
      this.valueMin = newValue;
    }
    this.valueMinChange.emit(this.valueMin);
    this.updateTrack();
  }

  onMaxSliderChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = Number(target.value);
    if (newValue <= this.valueMin) {
      this.valueMax = this.valueMin + 1;
    } else {
      this.valueMax = newValue;
    }
    this.valueMaxChange.emit(this.valueMax);
    this.updateTrack();
  }

  getBackgroundStyle() {
    const percentageMin = (this.valueMin - this.min) / (this.max - this.min) * 100;
    const percentageMax = (this.valueMax - this.min) / (this.max - this.min) * 100;
    return `linear-gradient(to right, var(--color-light-tertiary) ${percentageMin}%, var(--color-dark-secondary) ${percentageMin}%, var(--color-dark-secondary) ${percentageMax}%, var(--color-light-tertiary) ${percentageMax}%)`;
  }

  updateTrack() {
    const trackElement = this.track.nativeElement as HTMLElement;
    if (trackElement) {
      trackElement.style.background = this.getBackgroundStyle();
    }
  }
}
