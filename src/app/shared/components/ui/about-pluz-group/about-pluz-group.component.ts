import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-pluz-group',
  imports: [],
  templateUrl: './about-pluz-group.component.html',
  styleUrl: './about-pluz-group.component.scss',
})
export class AboutPluzGroupComponent {
  @Input() image1: string = '/assets/img/home/about1.jpg';
  @Input() image2: string = '/assets/img/home/about2.jpg';
  @Input() image3: string = '/assets/img/home/about3.jpg';
  @Input() image4: string = '/assets/img/home/about4.jpg';
}
