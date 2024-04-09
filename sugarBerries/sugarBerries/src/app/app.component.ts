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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HeaderComponent, MainComponent, PhotoGalleryComponent, ServicesComponent, EquipmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sugarBerries';

}

