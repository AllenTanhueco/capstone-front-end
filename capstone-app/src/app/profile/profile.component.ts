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
    email: '',
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  submitted = false;

  // Toggle variables for showing/hiding passwords
  showNewPassword = false;
  showConfirmPassword = false;



  submitProfile() {
    if (this.profile.newPassword !== this.profile.confirmNewPassword) {
      alert("New Password and Confirm New Password do not match.");
      return;
    }
  
  
    this.profile.password = this.profile.newPassword;
  
    this.submitted = true;
  

    this.profile.newPassword = '';
    this.profile.confirmNewPassword = '';
  }
  
}
