import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-popular-product',
  imports: [ButtonModule, RouterModule],
  templateUrl: './popular-product.component.html',
  styleUrl: './popular-product.component.scss',
})
export class PopularProductComponent {
  @Input() title: string = 'Popular Products';
  @Input() centerTitle: boolean = false;
  products = [
    {
      title: 'Workshop Press',
      image: '/assets/img/home/WorkshopPress.png',
      RouterName: '/view/products/workshop-press',
    },
    {
      title: 'Type Press',
      image: '/assets/img/home/TypePress.png',
      RouterName: '/view/products/type-press',
    },
    {
      title: 'Hose Coupling Machines',
      image: '/assets/img/home/HoseCouplingMachines.png',
      RouterName: '/view/products/house-coupling-machine',
    },
    {
      title: 'Portable Repair Hydraulic Bench',
      image: '/assets/img/home/PortableRepairHydraulicBench.png',
      RouterName: '/view/products/protable-repair-hydraulic-bench',
    },
  ];
}
