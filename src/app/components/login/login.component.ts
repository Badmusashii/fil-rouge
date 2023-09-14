import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

// login-form.model.ts
export interface LoginForm {
  username: string,
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  login() {
    console.log("je suis dans ma méthode login : ", this.loginForm.value);

    const data = {
      
      username: this.loginForm.get('username')?.value,
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.authService.login(data).subscribe(res => {
      console.log('je log la reponse', res);
      
     
    })
  
    // if (this.loginForm.valid) {
    //   const formData = this.loginForm.value as LoginForm;
    //   this.authService.login(formData).subscribe((res)
    //     console.log(res);

    //   );
  }
}
