import { Component } from '@angular/core';

import { AboutPluzGroupComponent } from '@/app/shared/components/ui/about-pluz-group/about-pluz-group.component';
import { BlogComponent } from '@/app/shared/components/ui/blog/blog.component';
import { CarouselComponent } from '@/app/shared/components/ui/carousel/carousel.component';
import { ContactComponent } from '@/app/shared/components/ui/contact/contact.component';
import { ElevatedCardComponent } from '@/app/shared/components/ui/elevated-card/elevated-card.component';
import { UltraReliableComponent } from '@/app/shared/components/ui/ultra-reliable/ultra-reliable.component';

@Component({
  selector: 'app-about',
  imports: [
    ElevatedCardComponent,
    AboutPluzGroupComponent,
    UltraReliableComponent,
    BlogComponent,
    ContactComponent,
    CarouselComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
