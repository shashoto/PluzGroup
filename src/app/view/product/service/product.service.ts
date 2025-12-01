import { Injectable } from '@angular/core';

import { data } from '@/app/data/dataset';

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
    };

    table?: {
      title: string;
      points: string[];
      image: string;
    }[];
  };
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

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productPageMap: Record<string, string> = {
    'workshop-press': 'EHPM',
    'Type Press': 'PTP',
    'Portable Repair Hydraulic Bench': 'PRHB',
    'Hose Coupling Machines': 'HCM',
  };
  getProductDetails(url: string) {
    const productName = this.productPageMap[url];

    console.log('product Name', productName);

    return data[productName];
  }
}
