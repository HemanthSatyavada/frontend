import { Component } from '@angular/core';

@Component({
  selector: 'app-hamming-distance',
  templateUrl: './hamming-distance.component.html',
  styleUrls: ['./hamming-distance.component.scss']
})
export class HammingDistanceComponent {
  value1: string = '';
  value2: string = '';
  hammingDistance: number | null = null;
  errorMessage: string = '';

  // This method calculates the Hamming Distance between the two strings.
  calculateHamming(): void {
    // First, check if either string is empty or null
    if (!this.value1 || !this.value2) {
      console.log(this.value1);
      console.log(this.value2);
      this.errorMessage = 'Both strings must have a value.';
      this.hammingDistance = null;
      return;
    }

    // To truly compare fixed-length strings, we can pad the shorter string with spaces
    const maxLength = Math.max(this.value1.length, this.value2.length);
    const padded1 = this.value1.padEnd(maxLength, ' ');
    const padded2 = this.value2.padEnd(maxLength, ' ');

    this.hammingDistance = this.computeDistance(padded1, padded2);
    this.errorMessage = '';
  }

  // A helper method that computes the Hamming distance
  private computeDistance(str1: string, str2: string): number {
    let distance = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        distance++;
      }
    }
    return distance;
  }
}
