import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  logoSmall: string = 'assets/images/logos/Boho Abstract Handwritten Brand Logo_20240327_141638_0000.png';




  @ViewChild('sectionsWrapper') sectionsWrapper!: ElementRef<HTMLElement>;
  @ViewChild('sectionsDropdown') sectionsDropdown!: ElementRef<HTMLElement>;
  
  dropdownmenuopen() {
    const dropdownElement = this.sectionsDropdown.nativeElement;
    const currentPosition = parseInt(dropdownElement.style.top || '-250', 10);
    const newPosition = currentPosition === -250 ? 75 : -250;
    dropdownElement.style.top = `${newPosition}px`;
  }
  mouseDown = false;
  startX!: number;
  scrollLeft!: number;

  constructor(private mediaMatcher: MediaMatcher) { }

  isMobileScreen(): boolean {
    return this.mediaMatcher.matchMedia('(min-width: 768px)').matches;
  }
  ngAfterViewInit(): void {
    if (this.sectionsWrapper) {
      const slider = this.sectionsWrapper.nativeElement;
      this.initializeSlider(slider);
      console.log("ok");
    }
  }

  startDragging(e: MouseEvent | TouchEvent, slider: HTMLElement): void {
    if (e.type === 'touchstart') {
      this.startX = (e as TouchEvent).touches[0].pageX - slider.offsetLeft;
    } else {
      this.startX = (e as MouseEvent).pageX - slider.offsetLeft;
    }
    this.mouseDown = true;
    this.scrollLeft = slider.scrollLeft;
    console.log("ok");

  }

  stopDragging(): void {
    this.mouseDown = false;
  }

  move(e: MouseEvent | TouchEvent, slider: HTMLElement): void {
    e.preventDefault();
    if (!this.mouseDown) { return; }
    let x;
    if (e.type === 'touchmove') {
      x = (e as TouchEvent).touches[0].pageX - slider.offsetLeft;
    } else {
      x = (e as MouseEvent).pageX - slider.offsetLeft;
    }
    const scroll = (x - this.startX) * 1.5;
    slider.scrollLeft = this.scrollLeft - scroll;
  }

  initializeSlider(slider: HTMLElement): void {
    slider.addEventListener('mousemove', (e) => this.move(e, slider), false);
    slider.addEventListener('mousedown', (e) => this.startDragging(e, slider), false);
    slider.addEventListener('mouseup', () => this.stopDragging(), false);
    slider.addEventListener('mouseleave', () => this.stopDragging(), false);
    slider.addEventListener('touchmove', (e) => this.move(e, slider), false);
    slider.addEventListener('touchstart', (e) => this.startDragging(e, slider), false);
    slider.addEventListener('touchend', () => this.stopDragging(), false);
  }
}
