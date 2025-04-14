import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  @Input() car: any = {};
  @Output() carSaved = new EventEmitter<void>();

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    if (!this.car.id) {
      this.car = {
        brand: '',
        model: '',
        manufacturingDate: new Date().toISOString().split('T')[0],
        type: '',
        rentalPricePerDay: 0,
        availabilityStatus: 'Available',
        color: ''
      };
    }
  }

  saveCar(): void {
    const carInput = {
      brand: this.car.brand,
      model: this.car.model,
      manufacturingDate: this.car.manufacturingDate,
      type: this.car.type,
      rentalPricePerDay: parseFloat(this.car.rentalPricePerDay),
      availabilityStatus: this.car.availabilityStatus,
      color: this.car.color
    };

    if (this.car.id) {
      this.carService.updateCar(this.car.id, carInput).subscribe({
        next: () => {
          alert('Car updated successfully');
          this.carSaved.emit();
        },
        error: (err) => console.error(err)
      });
    } else {
      this.carService.addCar(carInput).subscribe({
        next: () => {
          alert('Car added successfully');
          this.carSaved.emit();
        },
        error: (err) => console.error(err)
      });
    }
  }
}