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

  routesLinks = [
    {
      label: 'Home',
      path: '/view/home',
      extraInfo: [
        'Hydraulic Torque Wrench: Types, Pumps, Accessories',
        'Square Drive Hydraulic Torque Wrenches',
        'Low Profile Hydraulic Torque Wrenches',
        'Battery Torque Wrenches',
        'Pneumatic Torque Wrenches',
        'Plug-in Electric Torque Wrenches',
        'Hydraulic Bolt Tensioner', //middle
        'Hydraulic Wrench/Tensioner/Jack Pump',
        'Jacking System',
        'Hydraulic Jacks',
        'Heavy Duty Hydraulic Bearing Puller',
        'Torque Multiplier', //right
        'Flange Spreaders',
        'TP-Tensile Calibrator',
        'TC-Torque Calibrator',
        'Accessories',
      ],
    },
    {
      label: 'About Us',
      path: '/view/about',
      extraInfo: [
        'Hydraulic Torque Wrench: Types, Pumps, Accessories',
        'Square Drive Hydraulic Torque Wrenches',
        'Low Profile Hydraulic Torque Wrenches',
        'Battery Torque Wrenches',
        'Pneumatic Torque Wrenches',
        'Plug-in Electric Torque Wrenches',
        'Hydraulic Bolt Tensioner', //middle
        'Hydraulic Wrench/Tensioner/Jack Pump',
        'Jacking System',
        'Hydraulic Jacks',
        'Heavy Duty Hydraulic Bearing Puller',
        'Torque Multiplier', //right
        'Flange Spreaders',
        'TP-Tensile Calibrator',
        'TC-Torque Calibrator',
        'Accessories',
      ],
    },
    {
      label: 'Products',
      path: '/view/products',
      extraInfo: [
        'Hydraulic Torque Wrench: Types, Pumps, Accessories',
        'Square Drive Hydraulic Torque Wrenches',
        'Low Profile Hydraulic Torque Wrenches',
        'Battery Torque Wrenches',
        'Pneumatic Torque Wrenches',
        'Plug-in Electric Torque Wrenches',
        'Hydraulic Bolt Tensioner', //middle
        'Hydraulic Wrench/Tensioner/Jack Pump',
        'Jacking System',
        'Hydraulic Jacks',
        'Heavy Duty Hydraulic Bearing Puller',
        'Torque Multiplier', //right
        'Flange Spreaders',
        'TP-Tensile Calibrator',
        'TC-Torque Calibrator',
        'Accessories',
      ],
    },
    {
      label: 'Contact',
      path: '/view/contact',
      extraInfo: [
        'Hydraulic Torque Wrench: Types, Pumps, Accessories',
        'Square Drive Hydraulic Torque Wrenches',
        'Low Profile Hydraulic Torque Wrenches',
        'Battery Torque Wrenches',
        'Pneumatic Torque Wrenches',
        'Plug-in Electric Torque Wrenches',
        'Hydraulic Bolt Tensioner', //middle
        'Hydraulic Wrench/Tensioner/Jack Pump',
        'Jacking System',
        'Hydraulic Jacks',
        'Heavy Duty Hydraulic Bearing Puller',
        'Torque Multiplier', //right
        'Flange Spreaders',
        'TP-Tensile Calibrator',
        'TC-Torque Calibrator',
        'Accessories',
      ],
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
  splitIntoColumns(list: string[], columnCount: number) {
    const cols: string[][] = Array.from({ length: columnCount }, () => []);

    list.forEach((item, index) => {
      cols[index % columnCount].push(item);
    });

    return cols;
  }
  setActiveMenu(index: number) {
    this.activeMenuIndex = index;
    this.activeSubMenuIndex = 0;
  }

  clearActiveMenu() {
    this.activeMenuIndex = null;
  }

  setActiveSubMenu(index: number) {
    this.activeSubMenuIndex = index;
  }
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
