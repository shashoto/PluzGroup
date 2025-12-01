import { Component } from '@angular/core';
import { MainLayoutComponent } from '../shared/components/layout/main-layout/main-layout.component';

@Component({
  selector: 'app-view',
  imports: [MainLayoutComponent],
  standalone: true,
  template: `<app-main-layout></app-main-layout>`,
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {}
