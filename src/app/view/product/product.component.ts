import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ButtonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  products = [
    {
      title: 'Workshop Press',
      image: '/assets/img/home/WorkshopPress.png',
      RouterName: 'workshop-press',
    },
    {
      title: 'Type Press',
      image: '/assets/img/home/TypePress.png',
      RouterName: 'workshop-press',
    },
    {
      title: 'Hose Coupling Machines',
      image: '/assets/img/home/HoseCouplingMachines.png',
      RouterName: 'workshop-press',
    },
    {
      title: 'Portable Repair Hydraulic Bench',
      image: '/assets/img/home/PortableRepairHydraulicBench.png',
      RouterName: 'workshop-press',
    },
    {
      title: 'Type Press',
      image: '/assets/img/home/TypePress.png',
      RouterName: 'workshop-press',
    },
    {
      title: 'Hose Coupling Machines',
      image: '/assets/img/products/PTS-S.png',
      RouterName: 'workshop-press',
    },
    {
      title: 'Hose Coupling Machines',
      image: '/assets/img/products/RES.png',
      RouterName: 'workshop-press',
    },
  ];
}
