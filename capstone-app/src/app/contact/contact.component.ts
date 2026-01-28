import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {

  slides = [
    '/images/angeles_city.png',
    '/images/acdrrmo-hotline.png',
    '/images/angeles_city_logo.png'
  ];

  currentIndex = 0;
  private intervalId: any;

  hotlines = [
    {
      name: '𝗔𝗻𝗴𝗲𝗹𝗲𝘀 𝗖𝗶𝘁𝘆 𝗣𝗼𝗹𝗶𝗰𝗲 𝗢𝗳𝗳𝗶𝗰𝗲',
      numbers: ['0907-742-8000', '0908-377-0144'],
      icon: 'fa-shield-halved'
    },
    {
      name: '𝗕𝗙𝗣 – 𝗔𝗻𝗴𝗲𝗹𝗲𝘀 𝗖𝗶𝘁𝘆 𝗙𝗶𝗿𝗲 𝗦𝘁𝗮𝘁𝗶𝗼𝗻',
      numbers: ['0995-822-3620', '0925-451-3550'],
      icon: 'fa-fire-extinguisher'
    },
    {
      name: '𝗔𝗖𝗗𝗥𝗥𝗠𝗢 (𝗗𝗶𝘀𝗮𝘀𝘁𝗲𝗿 𝗥𝗶𝘀𝗸 𝗥𝗲𝗱𝘂𝗰𝘁𝗶𝗼𝗻 & 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁)',
      numbers: ['0917-851-9581', '0998-842-7746'],
      landline: '045-322-7796',
      messenger: 'https://www.facebook.com/DisasterReadyAngelesCity/',
      icon: 'fa-triangle-exclamation'
    },
    {
      name: '𝗖𝗶𝘁𝘆 𝗦𝗼𝗰𝗶𝗮𝗹 𝗪𝗲𝗹𝗳𝗮𝗿𝗲 𝗮𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁',
      numbers: ['0966-350-7393'],
      icon: 'fa-handshake'
    },
    {
      name: '𝗘𝗻𝘃𝗶𝗿𝗼𝗻𝗺𝗲𝗻𝘁𝗮𝗹 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 𝗦𝘆𝘀𝘁𝗲𝗺',
      numbers: ['0950-312-1699'],
      icon: 'fa-leaf'
    },
    {
      name: '𝗗𝗲𝗻𝗴𝘂𝗲 𝗧𝗮𝘀𝗸 𝗙𝗼𝗿𝗰𝗲',
      numbers: ['0933-928-8286'],
      icon: 'fa-bug'
    }
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.slides.length;
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
