import { Component } from '@angular/core';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, PageLayoutComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="h-full w-full">
      <app-page-layout></app-page-layout>
    </div>
  `,
  styles: '',
})
export class MainLayoutComponent {}
