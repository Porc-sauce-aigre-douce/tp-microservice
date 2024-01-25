import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  loginForm = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  login(): void {
    if (this.loginForm.valid && this.loginForm.value['username'] && this.loginForm.value['password']) {
      this.userService.getUserByUsername(this.loginForm.value['username']).subscribe(user => {
        if (user.password === this.loginForm.value['password'] && this.loginForm.value['username']) {
          sessionStorage.setItem('username', this.loginForm.value['username']);
          sessionStorage.setItem('role', user.role);
          this.router.navigate(['/']);
        }
      });
    }
  }
}
