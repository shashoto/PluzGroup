import { Injectable } from '@angular/core';

import { productData, multiProductData } from '@/app/data/dataset';
export interface Product {
  id: string;
  title: string;
  image: string;
  description: string;

  productOverView: {
    extraProductImages: string[];

    otherDetailPointType: 'Point' | 'Number' | string;

    otherDetails: Record<string, string[]>;

    extraInfo?: string;
  };

  specs: {
    images: {
      title: string;
      image: string;
    }[];
    tableHeaderInfo: { top: { label: string; rowspan: number }[]; bottom: { label: string }[] };
    table: any;
  };
  accesoriesType?: 'point' | 'noPoint';
  accesories?: { title: string; points: string[]; image: string }[];

  bottomDescription:
    | string
    | {
        title: string;
        points: string[];
      };

  footprintTitle: string;
  footprint: string;
}

export interface multiProducts {
  title: string;
  image: string;
  description: string;
  belowsTo: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productPageMap: Record<string, string> = {
    'workshop-press': 'EHPM',
    'type-press': 'PTP',
    'protable-repair-hydraulic-bench': 'PRHB',
    'house-coupling-machine': 'PRHB2',
  };
  getProductDetails(url: string) {
    const productName = this.productPageMap[url];

    console.log('product Name', productName);

    return productData[productName];
  }
  getMultiProductDetails(url: string) {
    const productName = this.productPageMap[url];

    console.log('product Name', productName);

    return multiProductData;
  }
}
