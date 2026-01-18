import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-citizen-charter',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './citizen-charter.component.html',
  styleUrl: './citizen-charter.component.css'
})
export class CitizenCharterComponent implements OnInit, OnDestroy {

  slides = [
    '/images/angeles_city.png',
    '/images/acdrrmo-hotline.png',
    '/images/angeles_city_logo.png'
  ];
  documents = [
    { name: 'Registration of Birth Certificate (On-Time Registration)', file: '/documents/registration-of-birth-on-time.pdf' },
    { name: 'Registration of Death Certificate (On-Time Registration)', file: '/documents/registration-of-death-on-time.pdf' },
    { name: 'Registration of Marriage Certificate (On-Time Registration)', file: '/documents/registration-of-marriage-on-time.pdf' },
    { name: 'Issuance of Certified True Copy of Birth, Marriage, Death and Other Registry Documents', file: '/documents/issuance-of-certified-copy-of-birth-others.pdf' },
    { name: 'Issuance of Marriage License', file: '/documents/issuance-of-marriage-license.pdf' },
    { name: 'Delayed Registration of Birth Certificate', file: '/documents/delayed-registration-of-marriage.pdf' },
    { name: 'Delayed Registration of Marriage Certificate', file: '/documents/delayed-registration-of-birth.pdf' },
    { name: 'Delayed Registration of Death Certificate', file: '/documents/delayed-registration-of-death.pdf' }
  ];

  currentIndex = 0;
  private intervalId: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startCarousel();
    }
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
