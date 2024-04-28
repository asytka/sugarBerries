import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-carbon-peeling',
  standalone: true,
  imports: [],
  templateUrl: './carbon-peeling.component.html',
  styleUrl: './carbon-peeling.component.scss'
})
export class CarbonPeelingComponent implements OnInit{
  bgImageSrc: string = "../assets/images/bg/photo_2024-04-22_14-06-23.jpg"

  imagesPriceList: string[] = [];

  ngOnInit(): void {
    this.imagesPriceList = [
      ''
    ]
  }
}
