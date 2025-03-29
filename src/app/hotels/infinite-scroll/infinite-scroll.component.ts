import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, fromEvent, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { MasterService } from '../../service/master.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Hotel } from '../../shared/models/hotel.interface';

@Component({
  selector: 'app-infinite-scroll',
  imports: [SharedModule, CommonModule, AsyncPipe],
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.scss',
})
export class InfiniteScrollComponent implements OnInit {
  obsArray: BehaviorSubject<Hotel[]> = new BehaviorSubject<Hotel[]>([]);
  hotels$: Observable<Hotel | any> = this.obsArray.asObservable();
  currentPage: number = 0;
  pageSize: number = 50;

  private hotels: Hotel[] = Array.from({ length: 1000 }).map((_, i) => ({
    id: i + 1,
    name: `Hotel ${i + 1}`,
    pricePerNight: 40000 + Math.floor(Math.random() * 10000),
    openingDate: new Date(),
    closingDate: new Date(),
    imageUrl: `https://picsum.photos/400?random=${i + 1}`,
  }));

  constructor(private masterService: MasterService) {}

  ngOnInit() {
    this.getData();
  }

  // Generál szállodai adatokat a megadott oldalszám és oldalméret alapján
  private getData(): void {
    this.masterService.getData(this.currentPage, this.pageSize).subscribe((newHotels: Hotel[]) => {
      this.obsArray.next(newHotels);
    });

    const content = document.querySelector('.hotels');
    if (content) {
      const scroll$ = fromEvent(content, 'scroll').pipe(map(() => content.scrollTop));

      scroll$.subscribe((scrollPos) => {
        const limit = content.scrollHeight - content.clientHeight;
        if (scrollPos === limit) {
          this.currentPage += this.pageSize;
          forkJoin([
            this.hotels$.pipe(take(1)),
            this.masterService.getData(this.currentPage, this.pageSize)
          ]).subscribe(([currentHotels, additionalHotels]: [Hotel[], Hotel[]]) => {
            const updatedHotels = [...currentHotels, ...additionalHotels];
            this.obsArray.next(updatedHotels);
          });
        }
      });
    }
  }

  // TODO: CLEAN UP:
  // private getData() {
  //   this.masterService.getData(this.currentPage, this.pageSize).subscribe((data: Array<Array<Hotel>> | any) => {
  //     this.obsArray.next(data);
  //   });

  //   const content = document.querySelector('.hotels');
  //   const scroll$ = fromEvent(content!, 'scroll').pipe(map(() => { return content!.scrollTop; }));

  //   scroll$.subscribe((scrollPos) => {
  //     let limit = content!.scrollHeight - content!.clientHeight;
  //     if (scrollPos === limit) {
  //       this.currentPage += this.pageSize;
  //       forkJoin([this.hotels$.pipe(take(1)), this.masterService.getData(this.currentPage, this.pageSize)]).subscribe((data: Array<Array<Hotel>>) => {
  //         const newArr = [...data[0], ...data[1]];
  //         this.obsArray.next(newArr);
  //       });
  //     }
  //   });
  // }
}
