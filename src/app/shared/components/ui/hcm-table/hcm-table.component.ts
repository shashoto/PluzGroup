import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface HoseCouplingMachine {
  no: number;
  model: string;
  locking: string;
  coreMolds: string;
  peels: string;
  shrinkingStroke: string;
  accuracy: string;
  displacement: string;
  power: string;
  systemPressure: string;
  voltage: string;
  closingForce: string;
  speed: string;
  dim: string;
  weight: string;
  other: string;
  features: string;
}

@Component({
  selector: 'app-hcm-table',
  imports: [CommonModule],
  templateUrl: './hcm-table.component.html',
  styleUrl: './hcm-table.component.scss',
})
export class HcmTableComponent {
  @Input() data: HoseCouplingMachine[] = [];
  @Input() headers: { top: { label: string; rowspan: number }[]; bottom: { label: string }[] } = {
    top: [],
    bottom: [],
  };
  extraData: HoseCouplingMachine[] = [
    {
      no: 1,
      model: 'PLUZ PSM Pipe Cutting Machine',
      locking: 'Φ6–51 mm',
      coreMolds: '',
      peels: '',
      shrinkingStroke: '',
      accuracy: '',
      displacement: '',
      power: '3 / 4 KW',
      systemPressure: '',
      voltage: '220/380 V',
      closingForce: '',
      speed: '2900 r/min',
      dim: '760 × 560 × 370 mm',
      weight: '100 KG',
      other: 'Maximum diameter 80 mm',
      features: 'Smoke exhaust interface and dust removal device included',
    },
    {
      no: 2,
      model: 'PLUZ PM Stripping Machine',
      locking: 'Φ6–51 mm',
      coreMolds: '',
      peels: '',
      shrinkingStroke: '',
      accuracy: '',
      displacement: '',
      power: '0.4 KW',
      systemPressure: '',
      voltage: '220/380 V',
      closingForce: '',
      speed: '140 r/min',
      dim: '530 × 530 × 1150 mm',
      weight: '80 KG',
      other: 'Maximum pipe diameter 60 mm',
      features: 'Safety protection device included',
    },
    {
      no: 3,
      model: 'PLUZ-QB-51 (cutting & stripping)',
      locking: 'Φ6–51 mm',
      coreMolds: '',
      peels: '',
      shrinkingStroke: '',
      accuracy: '',
      displacement: '',
      power: '3 / 4 KW',
      systemPressure: '',
      voltage: '220/380 V',
      closingForce: '',
      speed: '2850 r/min',
      dim: '710 × 560 × 1100 mm',
      weight: '', // Weight is missing/unspecified in the row in the image
      other: `Maximum pipe cutting inner diameter 51 mm. 
Reduction cover 400W. 
Fan power 350W. 
Double Blade saw blade 3350 × 2.8 mm`,
      features: 'Peel & cutting combo',
    },
  ];
}
