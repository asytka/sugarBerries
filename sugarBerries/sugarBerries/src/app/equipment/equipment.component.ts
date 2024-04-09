import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { LightboxModule, Lightbox} from 'ng-gallery/lightbox';


@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [LightboxModule, NgFor ],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss'
})
export class EquipmentComponent implements OnInit{
  images: ImageItem[] = [];

  constructor(public gallery: Gallery) { }
  
  ngOnInit() {
    this.images = [
    new ImageItem({ src: 'assets/images/equipment/photo_2024-04-08_20-03-18.jpg', thumb: 'assets/images/equipment/photo_2024-04-08_20-03-18.jpg' }),
    new ImageItem({ src: 'assets/images/equipment/photo_2024-04-07_12-50-28 (3).jpg', thumb: 'assets/images/equipment/photo_2024-04-07_12-50-28 (3).jpg' }),
    new ImageItem({ src: 'assets/images/equipment/photo_2024-04-07_12-50-28.jpg', thumb: 'assets/images/equipment/photo_2024-04-07_12-50-28.jpg' }),
    new ImageItem({ src: 'assets/images/equipment/photo_2024-04-07_18-17-19.jpg', thumb: 'assets/images/equipment/photo_2024-04-07_18-17-19.jpg' }),
    ]
  }
  
}
