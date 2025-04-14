import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: any[] = [];
  searchInput = {
    brand: '',
    model: '',
    type: '',
    color: '',
    availabilityStatus: ''
  };

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getAllCars().subscribe({
      next: (data) => this.cars = data,
      error: (err) => console.error(err)
    });
  }

  searchCars(): void {
    // Remove empty fields from search
    const cleanSearchInput = Object.fromEntries(
      Object.entries(this.searchInput).filter(([_, v]) => v !== '')
    );
    
    this.carService.searchCars(cleanSearchInput).subscribe({
      next: (data) => this.cars = data,
      error: (err) => console.error(err)
    });
  }

  deleteCar(id: number): void {
    if (confirm('Are you sure you want to delete this car?')) {
      this.carService.deleteCar(id).subscribe({
        next: () => {
          this.loadCars();
          alert('Car deleted successfully');
        },
        error: (err) => console.error(err)
      });
    }
  }
}