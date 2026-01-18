import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule] // ✅ REQUIRED
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      birthday: [''],
      mobileNumber: [''],
      email: [''],
      address: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
