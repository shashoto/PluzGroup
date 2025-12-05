import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

export interface HydraulicPress {
  model: string;
  A: number;
  B: number;
  C?: number;
  D?: number;
  E?: number;
  travel?: number;
  Stroke?: number;
  Pressure?: string;
  worktable?: string;
  Capacity_ton?: number;
  Power_KW?: string;
  capacity?: number;
  power?: string;
  grossWeight: string;
  packingSize: string;
}

@Component({
  selector: 'app-ehpm-table',
  imports: [TableModule, CommonModule],
  templateUrl: './ehpm-table.component.html',
  styleUrl: './ehpm-table.component.scss',
})
export class EhpmTableComponent {
  @Input() data: HydraulicPress[] = [];
  @Input() headers: { top: { label: string; rowspan: number }[]; bottom: { label: string }[] } =
    {} as any;
}
