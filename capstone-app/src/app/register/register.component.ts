import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule, RouterModule, CommonModule]
})
export class RegisterComponent {
  registerForm: FormGroup;

  showPassword = false;
  showConfirmPassword = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      LastName: [''],
      FirstName: [''],
      MiddleName: [''],
      Birthday: [''],
      MobileNumber: [''],
      Address: [''],
      EmailAddress: [''],
      Password: [''],
      ConfirmPassword: ['']
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
