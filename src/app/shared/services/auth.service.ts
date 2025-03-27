import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  user,
  signOut,
} from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
// import * as firebase from 'firebase/app';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AppUser } from '../models/app-user';
import { User } from '../models/user.interface';
// import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  // router = inject(Router);
  // userLoggedIn: boolean;
  authState: any;
  user$ = user(this.firebaseAuth); // it contains the user's data
  // user$: Observable<firebase.default.User>;
  currentUserSig = signal<User | null | undefined>(undefined);

  // TODO: CleanUP:
  constructor(
    //   // private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) //   // private afAuth: AngularFireAuth,
  //   // private afs: AngularFirestore
  {
    //   // this.user$ = afAuth.authState;
    //   // TODO: this.userLoggedIn
    //   // this.userLoggedIn = false;
    //   // this.firebaseAuth.onAuthStateChanged((user) => {
    //   //   if (user) {
    //   //     this.userLoggedIn = true;
    //   //   } else {
    //   //     this.userLoggedIn = false;
    //   //   }
    //   // });
  }

  signupUser(
    email: string,
    username: string,
    password: string
  ): Observable<void> {
    // Promise<any>
    // TODO: Note Observable<void> means we don't expect get back a User
    // Firebase doesn't return for us observables, it returns for us promises
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) =>
      updateProfile(response.user, { displayName: username })
    );
    return from(promise);
  }
  // return this.firebaseAuth
  //   .createUserWithEmailAndPassword(user.email, user.password)
  //     .then((result) => {
  // TODO: add photo: { displayName: username, photoURL: photoURL }))

  //       let emailLower = user.email.toLowerCase();

  //       this.afs.doc('/users/' + emailLower).set({
  //         accountType: 'endUser',
  //         displayName: user.displayName,
  //         displayName_lower: user.displayName.toLowerCase(),
  //         email: user.email,
  //         email_lower: emailLower,
  //       });

  //       result.user.sendEmailVerification();
  //     })
  // .catch((error) => {
  //   console.log('Auth Service: signup error', error);
  //   if (error.code) return { isValid: false, message: error.message };
  // });

  loginWithGoogle() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.firebaseAuth;
    // .signInWithRedirect(
    //   new firebase.default.auth.GoogleAuthProvider()
    // );
  }

  // get appUser$(): Observable<AppUser> {
  //   return this.user$.pipe(
  //     switchMap((user) => {
  //       if (user) return this.userService.get(user.uid).valueChanges();

  //       return of(null);
  //     })
  //   );
  // }

  loginUser(email: string, password: string): Observable<void> {
    // loginUser(email: string, password: string): Promise<any> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    )
      // return this.firebaseAuth
      //   .signInWithEmailAndPassword(email, password)
      .then(() => {
        // console.log('Auth Service: loginUser: success');
      });
    return from(promise);
  }
  // .catch((error) => {
  //   console.log('Auth Service: login error...');
  //   console.log('error code', error.code);
  //   console.log('error', error);
  //   if (error.code) return { isValid: false, message: error.message };
  // });

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    this.router.navigate(['/login']);
    return from(promise);
  }

  logoutUser(): Promise<void> {
    return this.firebaseAuth
      .signOut()
      .then(() => {
        this.router.navigate(['/hotels']);
      })
      .catch((error) => {
        console.log('Auth Service: logout error...');
        console.log('error code', error.code);
        console.log('error', error);
        if (error.code) return error;
      });
  }

  // resetPassword(email: string): Promise<any> {
  //   return this.firebaseAuth
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       console.log('Auth Service: reset password success');
  //     })
  //     .catch((error) => {
  //       console.log('Auth Service: reset password error...');
  //       console.log(error.code);
  //       console.log(error);
  //       if (error.code) return error;
  //     });
  // }

  // async resendVerificationEmail() {
  //   return (await this.firebaseAuth.currentUser)
  //     .sendEmailVerification()
  //     .then(() => {})
  //     .catch((error) => {
  //       console.log('Auth Service: sendVerificationEmail error...');
  //       console.log('error code', error.code);
  //       console.log('error', error);
  //       if (error.code) return error;
  //     });
  // }

  // setUserInfo(payload: object) {
  //   console.log('Auth Service: saving user info...');
  //   this.afs
  //     .collection('users')
  //     .add(payload)
  //     .then(function (res) {
  //       console.log('Auth Service: setUserInfo response...');
  //       console.log(res);
  //     });
  // }

  // getCurrentUser() {
  //   return this.afAuth.currentUser; // returns user object for logged-in users, otherwise returns null
  // }
}
