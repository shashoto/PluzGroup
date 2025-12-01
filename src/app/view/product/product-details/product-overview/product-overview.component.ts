import { CommonModule } from '@angular/common';
import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TabMenuModule } from 'primeng/tabmenu';

import { Product } from '../../service/product.service';

@Component({
  selector: 'app-product-overview',
  imports: [CommonModule, TabMenuModule, ButtonModule, ImageModule],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.scss',
})
export class ProductOverviewComponent {
  @Input() product: Product = {} as Product;

  tabs = ['Overview', 'Specs', 'Accessories'];

  activeTab = signal('Overview');
  selectedImage = signal('');

  ngOnInit() {
    this.selectedImage.set(this.product.image);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product?.productOverView) {
      const defaultImg = this.product.productOverView.extraProductImages?.[0] || this.product.image;

      this.selectedImage.set(defaultImg);
    }
  }

  changeImage(img: string) {
    this.selectedImage.update(() => img);
  }

  isString(value: any): value is string {
    return typeof value === 'string';
  }

  isObject(value: any): value is { title: string; points: string[] } {
    return value && typeof value === 'object' && !Array.isArray(value);
  }
}
