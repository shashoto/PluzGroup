import { Component } from '@angular/core';

import { AboutPluzGroupComponent } from '@/app/shared/components/ui/about-pluz-group/about-pluz-group.component';
import { BlogComponent } from '@/app/shared/components/ui/blog/blog.component';
import { CarouselComponent } from '@/app/shared/components/ui/carousel/carousel.component';
import { ContactComponent } from '@/app/shared/components/ui/contact/contact.component';
import { ElevatedCardComponent } from '@/app/shared/components/ui/elevated-card/elevated-card.component';
import { FlagsComponent } from '@/app/shared/components/ui/flags/flags.component';
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
    FlagsComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  elevatedCardInfo = {
    title: 'Engineering Power. Precision. Performance.',
    description:
      'At Pluz Group, we specialize in manufacturing high-performance hydraulic tools and bolting systems built for the world’s toughest industries. Our products are engineered for strength, reliability, and precision — delivering unmatched performance in construction, mining, oil & gas, and heavy engineering sectors.<br/><br/> Driven by innovation and backed by rigorous testing, we create solutions that keep your operations running stronger, safer, and longer.',
    buttonTitle: '',
    routerUrl: '',
    image1: '/assets/img/home/img1.png',
    image2: '',
  };
}
