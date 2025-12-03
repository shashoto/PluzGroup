import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-flags',
  imports: [CommonModule],
  templateUrl: './flags.component.html',
  styleUrl: './flags.component.scss',
})
export class FlagsComponent {
  flags = [
    '/assets/img/country/Kenya.png',
    '/assets/img/country/Sweden.png',
    '/assets/img/country/UAE.png',
    '/assets/img/country/Uganda.png',
    '/assets/img/country/UK.png',
  ];
}
