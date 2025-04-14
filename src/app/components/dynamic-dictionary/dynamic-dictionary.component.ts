import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-dictionary',
  templateUrl: './dynamic-dictionary.component.html',
  styleUrls: ['./dynamic-dictionary.component.scss']
})
export class DynamicDictionaryComponent implements OnInit {
  userInput: string = ''; // User's input
  dictionary: string[] = []; // Fetched dictionary
  suggestions: { word: string; distance: number }[] = []; // List of suggestions

  // API URL for a dummy dictionary
  private apiUrl = 'https://dummyjson.com/products'; // Replace with your API if available

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDictionary();
  }

  // Fetch dictionary data from the API
  fetchDictionary(): void {
    this.http.get<any>(this.apiUrl).subscribe(
      (data) => {
        // For this example, assume the API returns a list of strings
        this.dictionary = data.products.map((item: any) => item.title.toLowerCase()); // Transform API data
      },
      (error) => {
        console.error('Error fetching dictionary:', error);
      }
    );
  }

  // Update suggestions whenever the user types
  updateSuggestions(): void {
    if (!this.userInput) {
      this.suggestions = []; // Clear suggestions if input is empty
      return;
    }

    this.suggestions = this.dictionary
      .map((word) => ({
        word: word,
        distance: this.calculateHammingDistance(this.userInput, word)
      }))
      .sort((a, b) => a.distance - b.distance) // Sort by distance
      .slice(0, 5); // Limit to top 5 results
  }

  // Hamming distance calculation with padding
  private calculateHammingDistance(value1: string, value2: string): number {
    const maxLength = Math.max(value1.length, value2.length);

    // Pad both strings to the same length
    const padded1 = value1.padEnd(maxLength, ' '); // Add spaces to the end of value1 if it's shorter
    const padded2 = value2.padEnd(maxLength, ' '); // Add spaces to the end of value2 if it's shorter

    let distance = 0;

    // Compare character by character
    for (let i = 0; i < maxLength; i++) {
      if (padded1[i] !== padded2[i]) {
        distance++;
      }
    }

    return distance; // Return the calculated distance
  }
}
