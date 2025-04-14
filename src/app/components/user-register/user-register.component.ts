import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  registerForm: FormGroup;
  isLoading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  private apiUrl = 'http://localhost:8080/api/v1/users/register'; // Your API endpoint

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9,15}$')]], // Validates for numeric and length
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Submit the form and send data to backend
  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please fill all fields correctly.';
      return;
    }

    this.isLoading = true;
    const formData = this.registerForm.value;

    this.http.post(this.apiUrl, formData).subscribe(
      (response) => {
        console.log('Success:', response);
        this.successMessage = 'User registered successfully!';
        this.errorMessage = '';
        this.isLoading = false;
        this.registerForm.reset(); // Optionally reset the form after submission
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Failed to register. Please try again.';
        this.isLoading = false;
      }
    );
  }

  // Helper to access form controls
  get f() {
    return this.registerForm.controls;
  }
}
