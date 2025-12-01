import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
}

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  currentIndex = 0;

  testimonials: Testimonial[] = [
    {
      name: 'Leo',
      role: 'Lead Designer',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
      image: 'assets/user.png',
    },
    {
      name: 'Leo',
      role: 'Lead Designer',
      rating: 5,
      text: 'It was a very good experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt.',
      image: 'assets/user.png',
    },
    {
      name: 'Leo',
      role: 'Lead Designer',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis.',
      image: 'assets/user.png',
    },
    {
      name: 'Leo',
      role: 'Lead Designer',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
      image: 'assets/user.png',
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  carousel: any;

  @ViewChild(CarouselComponent) set carouselRef(carousel: CarouselComponent) {
    this.carousel = carousel;
  }

  prev() {
    this.carousel?.navBackward();
    this.updateCurrentIndex(-1);
  }

  next() {
    this.carousel?.navForward();
    this.updateCurrentIndex(1);
  }

  goToSlide(index: number) {
    if (this.carousel) {
      this.carousel.page = index;
      this.currentIndex = index;
    }
  }

  private updateCurrentIndex(direction: number) {
    this.currentIndex =
      (this.currentIndex + direction + this.testimonials.length) % this.testimonials.length;
  }
}
