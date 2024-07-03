import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-library',
  templateUrl: './product-library.component.html',
  styleUrls: ['./product-library.component.css'],
  standalone: true,
  imports: [
    NgForOf
  ]
})
export class ProductLibraryComponent implements OnInit {
  @Input() images: string[] = [];
  selectedImage: string = '';

  constructor(protected apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.images.length == 0) return
    this.selectedImage = this.images[0];
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }
}
