import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hotel } from '../shared/models/hotel.interface';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotels: Hotel[] = Array.from({ length: 1000 }).map((_, i) => ({
    id: i + 1,
    name: `Hotel ${i + 1}`,
    pricePerNight: 40000+Math.floor(Math.random() * 10000),
    openingDate: new Date(),
    closingDate: new Date(),
    imageUrl: `https://picsum.photos/400?random=${i + 1}`
  }));

  getHotels(offset: number, limit: number): Observable<Hotel[]> {
    return of(this.hotels.slice(offset, offset + limit));
  }

  getHotelById(id: number): Observable<Hotel | undefined> {
    return of(this.hotels.find(h => h.id === id));
  }

  updateHotel(hotel: Hotel): void {
    const index = this.hotels.findIndex(h => h.id === hotel.id);
    if (index > -1) {
      this.hotels[index] = hotel;
    }
  }

  deleteHotel(id: number): void {
    this.hotels = this.hotels.filter(h => h.id !== id);
  }
}
