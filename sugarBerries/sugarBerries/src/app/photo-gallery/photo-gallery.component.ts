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
      new ImageItem({ src: 'assets/images/photo-gallery/photo_2024-03-28_18-35-22.jpg', thumb: 'assets/images/photo-gallery/photo_2024-03-28_18-35-22.jpg' }),
      new ImageItem({ src: 'assets/images/photo-gallery/photo_2024-03-28_18-35-26.jpg', thumb: 'assets/images/photo-gallery/photo_2024-03-28_18-35-26.jpg' }),
      new ImageItem({ src: 'assets/images/photo-gallery/photo_2024-03-28_18-36-52.jpg', thumb: 'assets/images/photo-gallery/photo_2024-03-28_18-36-52.jpg' }),
    ];
  }
}
