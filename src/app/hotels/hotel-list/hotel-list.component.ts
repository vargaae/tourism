import { OnInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HotelService } from '../../service/hotel.service';

import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { Hotel } from '../../shared/models/hotel.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-list',
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollDirective,
  ],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelListComponent implements OnInit {
  // obsArray: BehaviorSubject<Hotel[]> = new BehaviorSubject<Hotel[]>([]);
  // hotels$: Observable<Hotel[]> = this.obsArray.asObservable();
  hotels$: Hotel[] = [];
  offset = 0;
  limit = 50;

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels(this.offset, this.limit).subscribe((data) => {
      this.hotels$ = [...this.hotels$, ...data];
      this.offset += this.limit;
    });
  }

  onScroll() {
    this.loadHotels();
  }
}
