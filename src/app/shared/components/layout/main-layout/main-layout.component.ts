import { Component } from '@angular/core';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, FooterComponent, PageLayoutComponent],
  template: `
    <app-navbar></app-navbar>
    <app-page-layout></app-page-layout>
    <app-footer></app-footer>
  `,
  styles: '',
})
export class MainLayoutComponent {}
