import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {

  slides = [
    '/images/angeles_city.png',
    '/images/acdrrmo-hotline.png',
    '/images/angeles_city_logo.png'
  ];

  currentIndex = 0;
  private intervalId: any;

 
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
   
    if (isPlatformBrowser(this.platformId)) {
      this.startCarousel();
    }
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  ngOnDestroy() {
   
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}