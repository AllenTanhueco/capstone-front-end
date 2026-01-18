import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile = {
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    address: '',
    contact: '',
    documentRequested: ''
  };

  submitted = false;

  // Track all document requests
  documentHistory: Array<{document: string, requestedAt: Date}> = [];

  submitProfile() {
    this.submitted = true;

    if (this.profile.documentRequested) {
      this.documentHistory.push({
        document: this.profile.documentRequested,
        requestedAt: new Date()
      });
    }

    console.log(this.documentHistory);
  }
}
