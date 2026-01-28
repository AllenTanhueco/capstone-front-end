import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface Announcement {
  title: string;
  date: Date;
  description: string;
  image?: string;
}
@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent implements OnInit, OnDestroy {
  slides = [
    '/images/angeles_city.png',
    '/images/acdrrmo-hotline.png',
    '/images/angeles_city_logo.png'
  ];
  currentIndex = 0;
  private intervalId: any;
   // Announcement carousel
   currentAnnouncementIndex = 0;

   announcements: Announcement[] = [
     {
       title: '𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲 𝐂𝐚𝐫𝐞 𝐢𝐧 𝐀𝐜𝐭𝐢𝐨𝐧: 𝐃𝐨𝐠 𝐈𝐦𝐩𝐨𝐮𝐧𝐝𝐢𝐧𝐠 𝐎𝐩𝐞𝐫𝐚𝐭𝐢𝐨𝐧𝐬 𝐥𝐞𝐝 𝐛𝐲 𝐂𝐢𝐭𝐲 𝐕𝐞𝐭𝐞𝐫𝐢𝐧𝐚𝐫𝐲 𝐢𝐧 𝐁𝐫𝐠𝐲. 𝐒𝐭𝐨. 𝐃𝐨𝐦𝐢𝐧𝐠𝐨',
       date: new Date('January 9, 2026'),
       description: 'Dog impounding operations were conducted in Barangay Sto. Domingo on January 9, 2026, led by the City Veterinary Office under the leadership of Mayor Jon Lazatin, in support of responsible pet ownership and community safety.',
       image: '/images/community1.jpg'
     },
     {
       title: '𝐏𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐧𝐠 𝐀𝐧𝐢𝐦𝐚𝐥𝐬, 𝐒𝐞𝐫𝐯𝐢𝐧𝐠 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐢𝐞𝐬: 𝟐𝟎𝟐𝟔 𝐃𝐨𝐠 𝐏𝐨𝐮𝐧𝐝 𝐀𝐜𝐜𝐫𝐞𝐝𝐢𝐭𝐚𝐭𝐢𝐨𝐧 𝐂𝐨𝐧𝐝𝐮𝐜𝐭𝐞𝐝',
       date: new Date('January 7, 2026'),
       description: 'The City Veterinary Office, conducted the 2026 accreditation of barangay dog pounds on January 7, 2026, covering Barangays Sto. Domingo, Cutcut, and Margot The activity was led by City Veterinarian Dr. Mario Samson Jr., with the support of Councilor Niknok Bañola, Chairperson of the Committee on Animal Welfare, to ensure that barangay facilities comply with proper standards for animal care, safety, and humane management in Angeles City.',
       image: '/images/community2.jpg'
     },
     {
       title: '𝐒𝐞𝐫𝐛𝐢𝐬𝐲𝐨𝐧𝐠 𝐌𝐞𝐝𝐢𝐤𝐚𝐥 𝐩𝐚𝐫𝐚 𝐬𝐚 𝐀𝐧𝐠𝐞𝐥𝐞ñ𝐨𝐬',
       date: new Date('January 3, 2026'),
       description: 'May LIBRENG konsultasyon ang AUFMC – Department of Surgery para sa iba’t ibang kondisyong maaaring mangailangan ng operasyon.',
       image: '/images/community3.jpg'
     }
   ];
 
   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
 
   ngOnInit(): void {
     if (isPlatformBrowser(this.platformId)) {
       this.startCarousel(); // background carousel auto-slide
     }
   }
 
   // Background image carousel
   startCarousel(): void {
     this.intervalId = setInterval(() => {
       this.nextSlide();
     }, 2000);
   }
 
   nextSlide(): void {
     this.currentIndex = (this.currentIndex + 1) % this.slides.length;
   }
 
   // Announcement carousel getter
   get currentAnnouncement(): Announcement {
     return this.announcements[this.currentAnnouncementIndex];
   }
 
   // Manual navigation only
   nextAnnouncement(): void {
     this.currentAnnouncementIndex = (this.currentAnnouncementIndex + 1) % this.announcements.length;
   }
 
   prevAnnouncement(): void {
     this.currentAnnouncementIndex =
       (this.currentAnnouncementIndex - 1 + this.announcements.length) % this.announcements.length;
   }
 
   ngOnDestroy(): void {
     if (this.intervalId) clearInterval(this.intervalId);
   }
 } 

