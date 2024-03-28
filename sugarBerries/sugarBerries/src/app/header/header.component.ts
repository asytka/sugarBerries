import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoBig: string = 'assets/images/Boho_Abstract_Handwritten_Brand_Logo_Допис_в_Instagram_20240328.png';
  logoSmall: string = 'assets/images/Boho Abstract Handwritten Brand Logo_20240327_141638_0000.png';

}
