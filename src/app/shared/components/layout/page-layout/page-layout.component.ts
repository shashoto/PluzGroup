import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-page-layout',
  imports: [CommonModule, RouterOutlet, FooterComponent],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss',
})
export class PageLayoutComponent {
  router = inject(Router);
  imageUrl: string | null = null;
  pageName: string = '';
  bgImages: Record<string, { image: string | null; title: string }> = {
    home: { image: '/assets/img/home/hero.png', title: '' },
    about: { image: '/assets/img/home/hero.png', title: 'About Us' },
    products: { image: '/assets/img/home/hero.png', title: 'Our Products' },
  };

  constructor() {
    // ✅ Set background on page refresh (initial load)
    const initialUrl = this.router.url.split('/');

    this.setBackground(initialUrl[initialUrl.length - 1]);

    // ✅ Update on navigation
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const urlSplit = event.urlAfterRedirects.split('/');

        this.setBackground(urlSplit[urlSplit.length - 1]);
      });
  }
  private formatTitleFromUrl(url: string): string {
    return url
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

  private setBackground(url: string) {
    const config = this.bgImages[url];

    console.log('url', url);
    this.imageUrl = config?.image ?? null;
    if (url === 'home') {
      this.pageName = '';

      return;
    }

    this.pageName =
      config?.title && config.title.trim() !== '' ? config.title : this.formatTitleFromUrl(url);
  }
}
