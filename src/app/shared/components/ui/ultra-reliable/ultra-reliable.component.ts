import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ultra-reliable',
  imports: [CommonModule, ButtonModule],
  templateUrl: './ultra-reliable.component.html',
  styleUrl: './ultra-reliable.component.scss',
})
export class UltraReliableComponent {
  industries = [
    {
      title: 'WIND',
      image: '/assets/img/home/Wind.png',
    },
    {
      title: 'INFRASTRUCTURE',
      image: '/assets/img/home/InfraStructure.png',
    },
    {
      title: 'RAIL',
      image: '/assets/img/home/Rail.png',
    },
  ];
}
