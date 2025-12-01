import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  productLinks = [
    { label: 'All Products', route: '/products' },
    { label: 'New Products', route: '/new-products' },
    { label: 'Custom Products', route: '/custom-products' },
    { label: 'Services', route: '/services' },
  ];

  socialLinks = [
    { icon: 'pi pi-facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'pi pi-instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'pi pi-youtube', url: 'https://youtube.com', label: 'YouTube' },
    { icon: 'pi pi-twitter', url: 'https://twitter.com', label: 'Twitter' },
  ];

  companyLinks = [
    { label: 'About us', route: '/about' },
    { label: 'Contacts', route: '/contacts' },
  ];

  email: string = '';

  onSubscribe() {
    if (this.email) {
      console.log('Subscribing email:', this.email);
      // Add your subscription logic here
      this.email = '';
    }
  }
}
