import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-masters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './masters.component.html',
  styleUrl: './masters.component.scss'
})
export class MastersComponent {
  allmasters: string = 'assets/images/masters/photo_2024-04-09_21-57-12.jpg';
    images: string[][] = [
    ['assets/images/masters/photo_2024-04-09_21-57-14.jpg', 'Катерина Пархоменко'],
    ['assets/images/masters/photo_2024-04-09_21-57-21.jpg', 'Юлія Пелех'],
    ['assets/images/masters/photo_2024-04-09_21-57-19.jpg', 'Ольга Золочівська'],
    ['assets/images/masters/photo_2024-04-09_21-57-17.jpg', "Дар'я Мартинюк"]
   ]
   
}
