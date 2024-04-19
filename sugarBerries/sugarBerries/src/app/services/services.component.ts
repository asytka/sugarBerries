import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [AnimateOnScrollModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
}
