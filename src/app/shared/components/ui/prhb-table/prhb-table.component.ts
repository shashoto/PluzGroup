import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface prbhtable {
  feature: string;
  description: string;
}
@Component({
  selector: 'app-prhb-table',
  imports: [CommonModule],
  templateUrl: './prhb-table.component.html',
  styleUrl: './prhb-table.component.scss',
})
export class PrhbTableComponent {
  @Input() data: prbhtable[] = [];
  @Input() headers: { top: { label: string; rowspan: number }[]; bottom: { label: string }[] } = {
    top: [],
    bottom: [],
  };

  table = [
    // Weights
    { spec: 'BRC-1', details: 'Empty weight 500 Kg', group: 'Weights' },

    // Electrical system characteristics
    {
      spec: 'Applied electrical power',
      details: 'KW 2,2',
      group: 'Electrical system characteristics',
    },
    { spec: 'Voltage', details: '380 V three-phase', group: 'Electrical system characteristics' },
    { spec: 'Frequency', details: '50 Hz', group: 'Electrical system characteristics' },

    // Electric motorisation
    {
      spec: 'Low pressure system motor',
      details: 'Three-phase asynchronous 2,2 KW',
      group: 'Electric motorisation',
    },

    // Hydraulic plant
    { spec: 'Internal tank capacity', details: '60 lt', group: 'Hydraulic plant' },
    { spec: 'Recommended fluids', details: 'Oil ISO VG 32', group: 'Hydraulic plant' },
    {
      spec: 'Low Pressure Circuit',
      details: 'Flow max: 6 l/min — Pressure max: 250 bar',
      group: 'Hydraulic plant',
    },
  ];
  groupKeys = [...new Set(this.table.map((i) => i.group))];

  // component.ts
  filteredTable(group: string) {
    return this.table.filter((r) => r.group === group);
  }
}
