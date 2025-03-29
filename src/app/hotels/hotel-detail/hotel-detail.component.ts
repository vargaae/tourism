import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HotelService } from '../../service/hotel.service';
import { Hotel } from '../../shared/models/hotel.interface';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  providers: [provideNativeDateAdapter()],
  imports: [SharedModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./hotel-detail.component.scss'],
})
export class HotelDetailComponent implements OnInit {
  hotel: Hotel | undefined;
  hotelForm!: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private hotelService = inject(HotelService);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') ?? '0');
    this.hotelService.getHotelById(id).subscribe((hotel) => {
      this.hotel = hotel;
      this.hotelForm = this.fb.nonNullable.group({
        pricePerNight: [hotel?.pricePerNight, Validators.required],
        openingDate: [hotel?.openingDate, Validators.required],
        closingDate: [hotel?.closingDate, Validators.required],
      });
    });
  }

  onSubmit() {
    if (this.hotelForm && this.hotelForm.valid) {
      const updatedHotel = { ...this.hotel, ...this.hotelForm.value };
      this.hotelService.updateHotel(updatedHotel);
      this.router.navigate(['/hotel-list']);
    }
  }

  deleteHotel() {
    this.hotelService.deleteHotel(this.hotel?.id ?? 0);
    this.router.navigate(['/hotel-list']);
  }
}
