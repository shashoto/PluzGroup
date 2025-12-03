import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-elevated-card',
  imports: [RouterModule],
  templateUrl: './elevated-card.component.html',
  styleUrl: './elevated-card.component.scss',
})
export class ElevatedCardComponent {
  @Input() image1: string = '/assets/img/home/img1.png';
  @Input() image2: string = '/assets/img/home/img2.png';
  @Input() buttonTitle: string = 'View Details';
  @Input() buttonUrl: string = '';
  @Input() title: string = ' Hydraulic Tools for Heavy Machinery & Equipments';
  @Input() description: string =
    'Lorem Ipsum Dolor Sit Amet Consectetur. Lectus Eros Nunc Neque Lobortis Mauris Lectus Volutpat Consequat Ut. Nulla Velit Dolor Volutpat Velit Sagittis';
}
