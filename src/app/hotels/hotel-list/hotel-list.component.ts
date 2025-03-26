import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hotel-list',
  imports: [SharedModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelListComponent {
  auth = inject(AuthService);
  // emailSignInSubscription: Subscription;
  // googleSignInSubscription: Subscription;


  logout(): void {
    // Implement logout logic here
    this.auth.logoutUser();
    // this.emailSignInSubscription.unsubscribe();
    // this.googleSignInSubscription.unsubscribe();
  }

}
