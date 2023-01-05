import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from '../models/AppUser';
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedInData: AppUser;
  userMessage: string = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.loggedInData = {
      userName: '',
      password: ''
    };
    this.loginForm = formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    });

  };

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  submitLogin = () => {
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value)
      .subscribe((resp) => {
        if (JSON.stringify(resp).length > 2) {
          this.loggedInData = JSON.parse(JSON.stringify(resp).substring(1, JSON.stringify(resp).length - 1));
          if (this.loggedInData.userName === this.loginForm.value.userName) {
            localStorage.setItem('appUser', this.loggedInData.userName);
            this.loginForm.reset();
            console.log('login', localStorage.getItem('appUser'));
            this.router.navigate(['products']);
          }
        }
        else {
          this.loginForm.reset();
          this.userMessage = 'Invalid credentials!';
        }
      });
  };
};



