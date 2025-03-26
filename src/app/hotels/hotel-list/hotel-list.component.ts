import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-hotel-list',
  imports: [SharedModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelListComponent {

  logout(): void {
    // Implement logout logic here
    console.log('Logout');
  }

}
