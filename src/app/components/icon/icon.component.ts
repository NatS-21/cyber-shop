import {Component, Input, numberAttribute, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  standalone: true,
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() iconName: string = '';
  @Input({transform: numberAttribute}) size: number = 24;

  iconPath: string = '';

  ngOnInit(): void {
    this.iconPath = `assets/icons/${this.iconName}.svg`;
  }
}
