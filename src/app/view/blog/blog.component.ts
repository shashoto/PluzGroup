import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-blog',
  imports: [RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  router = inject(Router);
  blogPosts: BlogPost[] = [
    {
      id: 1,
      date: '08.08.2021',
      title: 'Lorem ipsum dolor sit amet consectetur. Ultrices amet.',
      description:
        'Lorem ipsum dolor sit amet consectetur. In eu nullam eget proin ultricies. Et amet sapien tincidunt urna tincidunt. Integer convallis diam ac malesuada porta.',
      image: '/assets/img/blogs/blog1.png',
      url: '/view/blogs/1',
    },
    {
      id: 2,
      date: '08.08.2021',
      title: 'Lorem ipsum dolor sit amet consectetur. Ultrices amet.',
      description:
        'Lorem ipsum dolor sit amet consectetur. In eu nullam eget proin ultricies. Et amet sapien tincidunt urna tincidunt. Integer convallis diam ac malesuada porta.',
      image: '/assets/img/blogs/blog2.png',
      url: '/view/blogs/2',
    },
    {
      id: 3,
      date: '08.08.2021',
      title: 'Lorem ipsum dolor sit amet consectetur. Ultrices amet.',
      description:
        'Lorem ipsum dolor sit amet consectetur. In eu nullam eget proin ultricies. Et amet sapien tincidunt urna tincidunt. Integer convallis diam ac malesuada porta.',
      image: '/assets/img/blogs/blog3.png',
      url: '/view/blogs/3',
    },
    {
      id: 4,
      date: '08.08.2021',
      title: 'Lorem ipsum dolor sit amet consectetur. Ultrices amet.',
      description:
        'Lorem ipsum dolor sit amet consectetur. In eu nullam eget proin ultricies. Et amet sapien tincidunt urna tincidunt. Integer convallis diam ac malesuada porta.',
      image: '/assets/img/blogs/blog4.png',
      url: '/view/blogs/4',
    },
  ];
}
