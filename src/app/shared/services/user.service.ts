import { Injectable } from '@angular/core';
import { getDatabase, ref, update, get } from '@angular/fire/database';
import firebase from 'firebase/app';

import { AppUser } from '../models/app-user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // TODO: Implement save method with firebase.User interface
  save(user: AppUser) {
  // save(user: firebase.User): void {
    const db = getDatabase();
    const userRef = ref(db, 'users/' + user.uid);
    update(userRef, {
      name: user.displayName,
      email: user.email,
    });
  }

  get(uid: string): Promise<AppUser | null> {
    const db = getDatabase();
    const userRef = ref(db, 'users/' + uid);
    return get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val() as AppUser;
      } else {
        return null;
      }
    });
    // get(uid: string): AngularFireObject<AppUser> {
    //   return this.db.object('/users/' + uid);
  }
}
