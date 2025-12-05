import { CommonModule } from '@angular/common';
import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TabMenuModule } from 'primeng/tabmenu';

import { Product } from '../../service/product.service';

import { EhpmTableComponent } from '@/app/shared/components/ui/ehpm-table/ehpm-table.component';
import { HcmTableComponent } from '@/app/shared/components/ui/hcm-table/hcm-table.component';
import { PrhbTableComponent } from '@/app/shared/components/ui/prhb-table/prhb-table.component';
import { PtpTableComponent } from '@/app/shared/components/ui/ptp-table/ptp-table.component';

@Component({
  selector: 'app-product-overview',
  imports: [
    CommonModule,
    TabMenuModule,
    ButtonModule,
    ImageModule,
    EhpmTableComponent,
    PtpTableComponent,
    PrhbTableComponent,
    HcmTableComponent,
  ],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.scss',
})
export class ProductOverviewComponent {
  @Input() product: Product = {} as Product;
  @Input() tableSelecter: string = '';
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
