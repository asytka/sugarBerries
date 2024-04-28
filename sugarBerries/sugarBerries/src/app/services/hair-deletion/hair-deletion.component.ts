import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-hair-deletion',
  standalone: true,
  imports: [ImageModule, NgFor],
  templateUrl: './hair-deletion.component.html',
  styleUrl: './hair-deletion.component.scss'
})
export class HairDeletionComponent implements OnInit {
  bgImageSrc: string = "../assets/images/bg/photo_2024-04-22_14-06-23.jpg"


  imagesPriceList: any[] = [];
  ngOnInit(): void {
    this.imagesPriceList = [
      { image: 'assets/images/hair-removal/photo_2024-04-28_21-12-10.jpg' },
      { image: 'assets/images/hair-removal/photo_2024-04-28_21-12-15.jpg' },
      { image: 'assets/images/hair-removal/photo_2024-04-28_21-12-17.jpg' },
    ]
  }

}
