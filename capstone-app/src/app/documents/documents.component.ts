import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
interface CityDocument {
  name: string;
  file: string;
}

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {

  documents: CityDocument[] = [
    {
      name: 'Registration of Birth Certificate (On-Time Registration)',
      file: '/documents/registration-of-birth-on-time.pdf'
    },
    {
      name: 'Registration of Death Certificate (On-Time Registration)',
      file: '/documents/registration-of-death-on-time.pdf'
    },
    {
      name: 'Registration of Marriage Certificate (On-Time Registration)',
      file: '/documents/registration-of-marriage-on-time.pdf'
    },
    {
      name: 'Issuance of Certified True Copy of Birth, Marriage, Death and Other Registry Documents',
      file: '/documents/issuance-of-certified-copy-of-birth-others.pdf'
    },
    {
      name: 'Issuance of Marriage License',
      file: '/documents/issuance-of-marriage-license.pdf'
    },
    {
      name: 'Delayed Registration of Birth Certificate',
      file: '/documents/delayed-registration-of-birth.pdf'
    },
    {
      name: 'Delayed Registration of Marriage Certificate',
      file: '/documents/delayed-registration-of-marriage.pdf'
    },
    {
      name: 'Delayed Registration of Death Certificate',
      file: '/documents/delayed-registration-of-death.pdf'
    }
  ];

  viewDocument(file: string): void {
    window.open(file, '_blank', 'noopener,noreferrer');
  }
}
