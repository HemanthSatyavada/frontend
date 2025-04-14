import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private apollo: Apollo) {}
  

  getAllCars(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query {
          allCars {
            id
            brand
            model
            type
            color
            rentalPricePerDay
            availabilityStatus
            manufacturingDate
          }
        }
      `
    }).valueChanges.pipe(map((result: any) => result.data.allCars));
  }

  searchCars(searchInput: any): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query SearchCars($searchInput: CarSearchInput) {
          searchCars(searchInput: $searchInput) {
            id
            brand
            model
            type
            color
            rentalPricePerDay
            availabilityStatus
          }
        }
      `,
      variables: { searchInput }
    }).valueChanges.pipe(map((result: any) => result.data.searchCars));
  }

  addCar(carInput: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation AddCar($carInput: CarInput!) {
          addCar(carInput: $carInput) {
            id
            brand
            model
          }
        }
      `,
      variables: { carInput }
    }).pipe(map((result: any) => result.data.addCar));
  }

  updateCar(id: number, carUpdateInput: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateCar($id: ID!, $carUpdateInput: CarUpdateInput!) {
          updateCar(id: $id, carUpdateInput: $carUpdateInput) {
            id
            brand
            model
            rentalPricePerDay
            color
          }
        }
      `,
      variables: { id, carUpdateInput }
    }).pipe(map((result: any) => result.data.updateCar));
  }

  deleteCar(id: number): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteCar($id: ID!) {
          deleteCar(id: $id)
        }
      `,
      variables: { id }
    }).pipe(map((result: any) => result.data.deleteCar));
  }
}