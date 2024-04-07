import { Component, OnInit } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { GalleryModule, Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [LightboxModule, NgFor, AsyncPipe],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss'
})
export class EquipmentComponent implements OnInit{
  galleryId = 'myLightbox';
  images: ImageItem[] = [];

  constructor(public gallery: Gallery) { }

  ngOnInit() {
    this.images = [
    new ImageItem({ src: 'assets/images/equipment/photo_2024-04-07_12-50-28 (2).jpg', thumb: 'assets/images/equipment/photo_2024-04-07_12-50-28 (2).jpg' }),
    new ImageItem({ src: 'assets/images/equipment/photo_2024-04-07_12-50-28 (3).jpg', thumb: 'assets/images/equipment/photo_2024-04-07_12-50-28 (3).jpg' }),
    new ImageItem({ src: 'assets/images/equipment/photo_2024-04-07_12-50-28.jpg', thumb: 'assets/images/equipment/photo_2024-04-07_12-50-28.jpg' }),
    new ImageItem({ src: 'assets/images/equipment/photo_2024-04-07_18-17-19.jpg', thumb: 'assets/images/equipment/photo_2024-04-07_18-17-19.jpg' }),
    ]
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.images);
  }
}
