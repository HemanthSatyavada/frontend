import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  userInput: string = ''; // User's input
  suggestions: { word: string; distance: number }[] = []; // List of suggestions with distances

  // Predefined dictionary of words
  dictionary: string[] = [
    'hello',
    'world',
    'hamming',
    'hello123',
    'hello456',
    '123hello',
    '456hello',
    'distance',
    'editor',
    'example',
    'angular',
    'suggestion',
    'priority',
    'dictionary' 
  ];

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
