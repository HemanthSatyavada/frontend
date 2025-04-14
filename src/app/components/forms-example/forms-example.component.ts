import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.scss']
})
export class FormsExampleComponent {
  form: FormGroup; // Define a FormGroup to manage the form's controls and state

  constructor(private fb: FormBuilder) {
    // Initialize the form with default values and validation rules
    this.form = this.fb.group({
      name: ['', Validators.required], // Name field is required
      email: ['', [Validators.required, Validators.email]], // Email must be valid
      password: ['', [Validators.required, Validators.minLength(8)]] // Password must be at least 8 characters
    });
  }

  // Submit handler
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted successfully!', this.form.value);
    } else {
      console.log('Form is invalid!');
    }
  }

  // Helper to access form controls in the template
  get f() {
    return this.form.controls;
  }
}
