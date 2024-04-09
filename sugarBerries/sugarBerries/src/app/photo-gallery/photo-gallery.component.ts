import { Component, OnInit  } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem} from 'ng-gallery';
import { ServicesComponent } from '../services/services.component';
@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [GalleryModule, ServicesComponent],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.scss'
})
export class PhotoGalleryComponent implements OnInit{
  images: GalleryItem[] = [];

  ngOnInit() {
    this.images = [
      new ImageItem({ src: 'assets/images/photo-gallery/photo_2024-04-07_11-47-08.jpg', thumb: 'assets/images/photo-gallery/photo_2024-04-07_11-47-08.jpg' }),
      new ImageItem({ src: 'assets/images/photo-gallery/photo_2024-04-07_11-47-12.jpg', thumb: 'assets/images/photo-gallery/photo_2024-04-07_11-47-12.jpg' }),
      new ImageItem({ src: 'assets/images/photo-gallery/photo_2024-04-07_11-47-17.jpg', thumb: 'assets/images/photo-gallery/photo_2024-04-07_11-47-17.jpg' }),
      new ImageItem({ src: 'assets/images/photo-gallery/photo_2024-04-07_11-47-21.jpg', thumb: 'assets/images/photo-gallery/photo_2024-04-07_11-47-21.jpg' }),
      new ImageItem({ src: 'assets/images/photo-gallery/photo_2024-04-07_11-47-23.jpg', thumb: 'assets/images/photo-gallery/photo_2024-04-07_11-47-23.jpg' }),
      new ImageItem({ src: 'assets/images/photo-gallery/photo_2024-04-07_11-48-05.jpg', thumb: 'assets/images/photo-gallery/photo_2024-04-07_11-48-05.jpg' }),
      new ImageItem({ src: 'assets/images/photo-gallery/photo_2024-04-07_11-47-59.jpg', thumb: 'assets/images/photo-gallery/photo_2024-04-07_11-47-59.jpg' }),
    ];
  }
}
