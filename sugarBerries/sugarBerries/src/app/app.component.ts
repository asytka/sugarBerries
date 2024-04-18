import { Component, HostListener  } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ServicesComponent } from './services/services.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MastersComponent } from './masters/masters.component';
import { AdvantagesComponent } from './advantages/advantages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            FormsModule,
            HeaderComponent,
            MainComponent,
            PhotoGalleryComponent,
            ServicesComponent,
            EquipmentComponent,
            MastersComponent,
            AdvantagesComponent,
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sugarBerries';

}

