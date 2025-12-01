import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BlogPost {
  date: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      date: '08.08.2021',
      title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/img/home/Blog1.png',
    },
    {
      date: '08.08.2021',
      title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/img/home/Blog2.png',
    },
    {
      date: '08.08.2021',
      title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/img/home/Blog3.png',
    },
    {
      date: '08.08.2021',
      title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/img/home/Blog4.png',
    },
  ];
}
