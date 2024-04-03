import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoSmall: string = 'assets/images/logos/Boho Abstract Handwritten Brand Logo_20240327_141638_0000.png';
}
