import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Hotel } from '../shared/models/hotel.interface';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl: string = 'https://projectapi.gerasim.in/api/RealEstate/';

  
  constructor(private http: HttpClient){ }
  
  addAgent(obj: any) {
    this.http.post(`${this.apiUrl}AddNewAgent`, obj)
  }

    // Aszinkron módon generál szállodai adatokat
    getData(page: number, size: number): Observable<Hotel[]> {
      const hotels: Hotel[] = [];
      for (let i = 0; i < size; i++) {
        const id = page * size + i + 1;
        hotels.push({
          id: id,
          name: `Hotel ${id}`,
          pricePerNight: 60000 + Math.floor(Math.random() * 10000),
          openingDate: new Date(),
          closingDate: new Date(),
          imageUrl: `https://picsum.photos/400?random=${id}`
        });
      }
  
      // Szimuláljuk az aszinkron adatbetöltést delay-el (például 500ms késleltetés)
      return of(hotels).pipe(delay(500));
    }
  // public getData(pageNumber: number, pageSize: number) {
  //   return this.http.get(`https://jsonplaceholder.typicode.com/photos?_start=${pageNumber}&_limit=${pageSize}`);
  // }
}
