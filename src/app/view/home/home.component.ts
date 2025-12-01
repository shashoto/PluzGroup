import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { AboutPluzGroupComponent } from '@/app/shared/components/ui/about-pluz-group/about-pluz-group.component';
import { BlogComponent } from '@/app/shared/components/ui/blog/blog.component';
import { ContactComponent } from '@/app/shared/components/ui/contact/contact.component';
import { ElevatedCardComponent } from '@/app/shared/components/ui/elevated-card/elevated-card.component';
import { PopularProductComponent } from '@/app/shared/components/ui/popular-product/popular-product.component';
import { UltraReliableComponent } from '@/app/shared/components/ui/ultra-reliable/ultra-reliable.component';

@Component({
  selector: 'app-home',
  imports: [
    ElevatedCardComponent,
    AboutPluzGroupComponent,
    ButtonModule,
    PopularProductComponent,
    UltraReliableComponent,
    BlogComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
