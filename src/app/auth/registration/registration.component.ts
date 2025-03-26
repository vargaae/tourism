import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-registration',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  auth = inject(AuthService);
  router = inject(Router);

  isProgressVisible: boolean;

  signupForm = this.fb.nonNullable.group({
    // displayName: new FormControl('Your Name', Validators.required),
    email: new FormControl('yourname@example.com', [
      Validators.required,
      Validators.email,
    ]),
    username: new FormControl('username', Validators.required),
    password: new FormControl('', Validators.required),
  });
  // TODO: cleanUp the old version of the form:
  //   signupForm = new FormGroup({
  //     // displayName: new FormControl('Your Name', Validators.required),
  //     email: new FormControl('yourname@example.com', [Validators.required, Validators.email]),
  //     username: new FormControl('username', Validators.required),
  //     password: new FormControl('', Validators.required)
  // });

  userLoggedIn: boolean = false;
  errorMessage: string;

  constructor() {
    this.isProgressVisible = false;
    this.errorMessage = '';
  }

  ngOnInit(): void {
    if (this.userLoggedIn) {
      this.router.navigate(['/hotels']);
    }
  }

  signup(): void {
    if (this.signupForm.invalid) return;

    this.isProgressVisible = true;

    const rawForm = this.signupForm.getRawValue();
    this.auth
      .signupUser(
        rawForm.email ?? '',
        rawForm.username ?? '',
        rawForm.password ?? ''
      )
      .subscribe(() => {
        this.isProgressVisible = false;
        console.log('logging in...with the registered email');
        this.router.navigateByUrl('/hotels');
      });
  }

  // registerObj: any = {
  //   userId: 0,
  //   userName: '',
  //   emailId: '',
  //   fullName: '',
  //   role: '',
  //   createdDate: new Date(),
  //   password: '',
  //   projecName: '',
  // };
}
