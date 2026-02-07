import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Announcement {
  title: string;
  date: Date;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit, OnDestroy {
 
  currentIndex = 0;
  private intervalId: any;

  // Announcement carousel
  currentAnnouncementIndex = 0;

  announcements: Announcement[] = [
    {
      title: '𝐏𝐓𝐑𝐎 𝐂𝐨𝐧𝐝𝐮𝐜𝐭𝐬 𝐏𝐫𝐨𝐚𝐜𝐭𝐢𝐯𝐞 𝐎𝐩𝐞𝐫𝐚𝐭𝐢𝐨𝐧𝐬 𝐟𝐨𝐫 𝐒𝐚𝐟𝐞𝐫 𝐑𝐨𝐚𝐝𝐬 𝐢𝐧 𝐀𝐧𝐠𝐞𝐥𝐞𝐬 𝐂𝐢𝐭𝐲',
      date: new Date('January 12, 2026'),
      description: 'Another proactive step by the City Government of Angeles, through the Public Transportation and Regulatory Office (PTRO), was carried out to ensure safe, orderly and compliant public transport for all Angeleños.',
      image: '/images/announcement1.jpg'
    },
    {
      title: '𝐀𝐧𝐠𝐞𝐥𝐞𝐬 𝐂𝐢𝐭𝐲 𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐞𝐬 𝐂𝐥𝐞𝐚𝐫𝐢𝐧𝐠 𝐨𝐟 𝐃𝐢𝐬𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝 𝐂𝐚𝐛𝐥𝐞𝐬 𝐀𝐥𝐨𝐧𝐠 𝐌𝐚𝐜𝐀𝐫𝐭𝐡𝐮𝐫 𝐇𝐢𝐠𝐡𝐰𝐚𝐲',
      date: new Date('January 11, 2026'),
      description: 'The Angeles City Traffic Development Office (ACTDO), in coordination with the City Engineer’s Office (CEO) and partner telecommunications companies (TELCOs), resumed clearing operations along MacArthur Highway in Barangay Salapungan to remove disconnected cables and properly organize overhead utility lines.',
      image: '/images/announcement2.jpg'
    },
    {
      title: '𝐂𝐢𝐭𝐲 𝐄𝐍𝐑𝐎 𝐚𝐧𝐝 𝐄𝐌𝐒 𝐔𝐫𝐠𝐞 𝐁𝐚𝐫𝐚𝐧𝐠𝐚𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝐬, 𝐂𝐢𝐭𝐢𝐳𝐞𝐧𝐬 𝐭𝐨 𝐇𝐞𝐥𝐩 𝐊𝐞𝐞𝐩 𝐀𝐛𝐚𝐜𝐚𝐧 𝐑𝐢𝐯𝐞𝐫 𝐅𝐫𝐞𝐞 𝐨𝐟 𝐒𝐨𝐥𝐢𝐝 𝐖𝐚𝐬𝐭𝐞',
      date: new Date('January 10, 2026'),
      description: 'Angeles City  — The City Environment and Natural Resources Office (CENRO) and the Environmental Management System (EMS) are renewing their call for community vigilance and sustained action to protect the Abacan River from solid waste. Barangay officials and residents living near the river are urged to help monitor and maintain a clean, healthy watershed.',
      image: '/images/announcement3.jpg'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
 
    }
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
