import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  userId: number | null = null; // Stores the user ID entered by the user
  userDetails: any = null; // Stores the fetched user data
  errorMessage: string = ''; // To handle error messages
  isLoading: boolean = false; // Loading state indicator

  constructor(private http: HttpClient) {}

  // Fetch user details using the entered userId
  fetchUserDetails(): void {
    if (this.userId === null || this.userId === undefined) {
      this.errorMessage = 'Please enter a valid user ID.';
      return;
    }

    this.isLoading = true; // Enable loading state
    const apiUrl = `http://localhost:8080/api/v1/users/getUser/${this.userId}`;

    this.http.get(apiUrl).subscribe(
      (data) => {
        console.log('User Details:', data);
        this.userDetails = data; // Assign fetched user data
        this.errorMessage = ''; // Clear any previous errors
        this.isLoading = false; // Disable loading state
      },
      (error) => {
        console.error('Error fetching user details:', error);
        this.userDetails = null; // Clear previous user details
        this.errorMessage = 'Failed to fetch user details. Please check the User ID or try again.';
        this.isLoading = false; // Disable loading state
      }
    );
  }
}
