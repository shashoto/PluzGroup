import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  email = 'pluzgroup@gmail.com';
  phone = '8974850947';
  searchQuery = '';

  activeMenuIndex: number | null = null;
  activeSubMenuIndex: number = 0;
  isDrawerOpen: boolean = false;
  blur: boolean = false;

  routesLinks = [
    {
      label: 'Home',
      path: '/view/home',
    },
    {
      label: 'About Us',
      path: '/view/about',
    },
    {
      label: 'Products',
      path: '/view/products',
      extraInfo: [
        {
          label: 'Torque Wrench',
          url: '/view/products/workshop-press',
        },
        {
          label: 'Workshop Press',
          url: '/view/products/workshop-press',
        },
        {
          label: 'Tyre Press',
          url: '/view/products/type-press',
        },
        {
          label: 'Portable Repair Hydraulic Bench',
          url: '/view/products/protable-repair-hydraulic-bench',
        },
        {
          label: 'Hose Coupling',
          url: '/view/products/house-coupling-machine',
        },
        {
          label: 'Hydraulic Cylinder Jacks',
          url: '/view/products/workshop-press',
        },
        {
          label: 'Rotating Engine Stand',
          url: '/view/products/workshop-press',
        },
      ],
    },
    {
      label: 'Blog',
      path: '/view/blogs',
    },
  ];

  countries = [
    { code: 'AE', flag: '🇦🇪', name: 'UAE', url: '/assets/img/country/Kenya.png' },
    { code: 'GB', flag: '🇬🇧', name: 'UK', url: '/assets/img/country/Sweden.png' },
    { code: 'UG', flag: '🇺🇬', name: 'Uganda', url: '/assets/img/country/UAE.png' },
    { code: 'DE', flag: '🇩🇪', name: 'Germany', url: '/assets/img/country/Uganda.png' },
    { code: 'SE', flag: '🇸🇪', name: 'Sweden', url: '/assets/img/country/UK.png' },
  ];

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
    }
  }
  splitIntoColumns(columnCount: number, list?: { label: string; url: string }[]) {
    if (!list) return;
    const cols: { label: string; url: string }[][] = Array.from({ length: columnCount }, () => []);

    list.forEach((item, index) => {
      cols[index % columnCount].push(item);
    });

    return cols;
  }
  setActiveMenu(index: number) {
    this.activeMenuIndex = index;
    this.activeSubMenuIndex = 0;
    this.blur = index === 2 ? true : false;
  }

  clearActiveMenu() {
    this.activeMenuIndex = null;
    this.blur = false;
  }

  setActiveSubMenu(index: number) {
    this.activeSubMenuIndex = index;
  }
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
