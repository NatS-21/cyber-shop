import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  goToNextPage() {
    this.goToPage(this.currentPage + 1);
  }

  goToPreviousPage() {
    this.goToPage(this.currentPage - 1);
  }

  getVisiblePages(): number[] {
    let pages: number[] = [];
    if (this.totalPages <= 7) {
      pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
    } else {
      if (this.currentPage <= 4) {
        pages = [1, 2, 3, 4, 5];
      } else if (this.currentPage >= this.totalPages - 3) {
        pages = [this.totalPages - 4, this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages];
      } else {
        pages = [this.currentPage - 1, this.currentPage, this.currentPage + 1];
      }
    }
    return pages;
  }
}
