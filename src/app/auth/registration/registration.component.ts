import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  imports: [SharedModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  // fb = inject(FormBuilder);
  // http = inject(HttpClient);
  // router = inject(Router);

  // loginForm = this.fb.nonNullable.group({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', Validators.required),
  // });
  isProgressVisible: boolean;
  
  signupForm = new FormGroup({
    displayName: new FormControl('Your Name', Validators.required),
    email: new FormControl('yourname@example.com', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
});

  userLoggedIn: boolean = false;
  errorMessage: string;




  constructor(private router: Router) {
    this.isProgressVisible = false;
    this.errorMessage = '';

}

ngOnInit(): void {
    if (this.userLoggedIn) {
        this.router.navigate(['/hotels']);
    }
}

signup() {
    if (this.signupForm.invalid)
        return;

    this.isProgressVisible = true;
    
}

  registerObj: any = {
    userId: 0,
    userName: '',
    emailId: '',
    fullName: '',
    role: '',
    createdDate: new Date(),
    password: '',
    projecName: '',
  };
}
