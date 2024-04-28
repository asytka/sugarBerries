import { Component } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { ServicesComponent } from '../services/services.component';
import { EquipmentComponent } from '../equipment/equipment.component';
import { MastersComponent } from '../masters/masters.component';
import { AdvantagesComponent } from '../advantages/advantages.component';
import { SertificatesComponent } from '../sertificates/sertificates.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    PhotoGalleryComponent,
    ServicesComponent,
    EquipmentComponent,
    MastersComponent,
    AdvantagesComponent,
    SertificatesComponent,
    CarouselModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
