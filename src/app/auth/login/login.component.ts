import { Component, inject } from '@angular/core';
// import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
// import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent{
// export class LoginComponent implements OnInit {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  auth = inject(AuthService);
  router = inject(Router);

  loginForm = this.fb.nonNullable.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  isProgressVisible: boolean;
  firebaseErrorMessage: string;


  constructor(
  ) {
    this.isProgressVisible = false;

    this.firebaseErrorMessage = '';
  }

  // ngOnInit(): void {
    // if (this.auth.userLoggedIn) {
    //   this.router.navigate(['/hotels']);
    // }
  // }

  loginUser(): void {
    console.log('loginForm');
    // this.isProgressVisible = true;

    // if (this.loginForm.invalid) return;


    // if (this.loginForm) {
    //       this.isProgressVisible = false;
    //       console.log('logging in...');
    //       this.router.navigate(['/hotels']);
    //     } 
        // else if (result.isValid == false) {
        //   console.log('login error', result);
        //   this.firebaseErrorMessage = result.message;
        // }


  }

  loginWithGoogle(): void {
    console.log('loginWithGoogle');

  }
}
