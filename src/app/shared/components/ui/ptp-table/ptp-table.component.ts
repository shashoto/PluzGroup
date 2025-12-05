import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface PTPTtable {
  spec: string;
  details: string;
}

@Component({
  selector: 'app-ptp-table',
  imports: [CommonModule],
  templateUrl: './ptp-table.component.html',
  styleUrl: './ptp-table.component.scss',
})
export class PtpTableComponent {
  @Input() data: PTPTtable[] = [];
  @Input() headers: { top: { label: string; rowspan: number }[]; bottom: { label: string }[] } = {
    top: [],
    bottom: [],
  };
}
