import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Product, ProductService } from '../service/product.service';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

import { PopularProductComponent } from '@/app/shared/components/ui/popular-product/popular-product.component';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, ProductOverviewComponent, PopularProductComponent],
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  router = inject(Router);
  productService = inject(ProductService);
  // SelectedProductInfo: Product = {} as Product;
  SelectedProductInfo = signal<Product>({} as Product);
  allProducts: Product[] = [];

  getAllProduct() {
    const url = this.router.url.split('/');
    const last = url[url.length - 1];

    this.allProducts = this.productService.getProductDetails(last) ?? [];
    this.SelectedProductInfo.set(this.allProducts[0]);
  }
  ngOnInit() {
    this.getAllProduct();
  }
}
