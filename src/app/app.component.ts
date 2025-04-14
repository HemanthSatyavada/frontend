import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // styles: [`h1{color:red;}`]
})
export class AppComponent {
  title = 'test';
 
  showForm = false;
  selectedCar: any = null;

  toggleForm(car: any = null): void {
    this.selectedCar = car;
    this.showForm = !this.showForm;
  }

  onCarSaved(): void {
    this.showForm = false;
  }
}
