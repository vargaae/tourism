import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
// import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SharedModule, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  isProgressVisible: boolean;
  firebaseErrorMessage: string;

  // auth = inject(AuthService);

  constructor(private router: Router
  ) {
    this.isProgressVisible = false;

    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    // if (this.auth.userLoggedIn) {
    //   this.router.navigate(['/hotels']);
    // }
  }

  loginUser() {
    this.isProgressVisible = true;

    if (this.loginForm.invalid) return;


    if (this.loginForm) {
          this.isProgressVisible = false;
          console.log('logging in...');
          this.router.navigate(['/hotels']);
        } 
        // else if (result.isValid == false) {
        //   console.log('login error', result);
        //   this.firebaseErrorMessage = result.message;
        // }


  }

  loginWithGoogle(): void {
  }
}
