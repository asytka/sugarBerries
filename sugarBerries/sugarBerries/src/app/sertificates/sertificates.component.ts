import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import {ButtonModule} from 'primeng/button'
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-sertificates',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './sertificates.component.html',
  styleUrl: './sertificates.component.scss'
})
export class SertificatesComponent {
  products: any[] = [
    { name: 'Product 1', price: 10, image: 'assets/images/photo-gallery/photo_2024-04-07_11-47-08.jpg', inventoryStatus: 'In Stock' },
    { name: 'Product 2', price: 20, image: 'assets/images/photo-gallery/photo_2024-04-07_11-47-08.jpg', inventoryStatus: 'Low Stock' },
    { name: 'Product 3', price: 15, image: 'assets/images/photo-gallery/photo_2024-04-07_11-47-08.jpg', inventoryStatus: 'Out of Stock'},
    { name: 'Product 3', price: 15, image: 'assets/images/photo-gallery/photo_2024-04-07_11-47-08.jpg', inventoryStatus: 'Out of Stock'},
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '425px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 3
    }
  ];

  getSeverity(status: string): string {
    return 'info';
  }
}
