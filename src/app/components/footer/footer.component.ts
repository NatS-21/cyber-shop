import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
}
