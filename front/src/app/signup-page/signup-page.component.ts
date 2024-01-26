import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User, role } from '../interfaces/user';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  signupForm = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  signup(): void {
    if (this.signupForm.valid && this.signupForm.value['username'] && this.signupForm.value['password']) {
      let userData: User = <User>this.signupForm.value;
      userData.role = role.Chomeur;
      this.userService.createUser(userData).subscribe(user => {
        if (this.signupForm.value['password'] && this.signupForm.value['username']) {
          sessionStorage.setItem('username', this.signupForm.value['username']);
          sessionStorage.setItem('id', user._id);
          sessionStorage.setItem('role', user.role);
          this.router.navigate(['/']);
        }
      });
    }
  }
}
