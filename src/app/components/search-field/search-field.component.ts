import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent {
  @Input() placeholder: string = 'Search';
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();

  onSearchTermChange(newTerm: string) {
    this.searchTermChange.emit(newTerm);
  }
}
