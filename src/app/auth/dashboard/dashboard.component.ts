import { Component, inject, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { UserComponent } from '../user/user.component';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [SharedModule, UserComponent],
})
export class DashboardComponent implements OnInit {
  auth = inject(AuthService);
  
  initialCount: number = 18;

  // count: number = 0;

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }

  onClick(initialCount: number) {
    this.initialCount++;
}
  // user: Observable<any>;

  //   constructor(private afAuth: Auth, private firestore: AngularFirestore) {
  //     // this.user = null;
  //   }

  ngOnInit(): void {
    // this.afAuth.authState.subscribe(user => {
    //     if (user) {
    //         let emailLower = user.email.toLowerCase();
    //         this.user = this.firestore.collection('users').doc(emailLower).valueChanges();
    //     }
    // });
  }
}
