import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-popular-product',
  imports: [ButtonModule],
  templateUrl: './popular-product.component.html',
  styleUrl: './popular-product.component.scss',
})
export class PopularProductComponent {
  @Input() title: string = 'Popular Products';
  products = [
    {
      title: 'Workshop Press',
      image: '/assets/img/home/WorkshopPress.png',
      RouterName: '/view/product/workshop-press',
    },
    {
      title: 'Type Press',
      image: '/assets/img/home/TypePress.png',
      RouterName: '/view/product/workshop-press',
    },
    {
      title: 'Hose Coupling Machines',
      image: '/assets/img/home/HoseCouplingMachines.png',
      RouterName: '/view/product/workshop-press',
    },
    {
      title: 'Portable Repair Hydraulic Bench',
      image: '/assets/img/home/PortableRepairHydraulicBench.png',
      RouterName: '/view/product/workshop-press',
    },
  ];
}
