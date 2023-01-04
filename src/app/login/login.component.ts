import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { BackendService } from '../backend.service';

import { Router } from '@angular/router';


@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

// export class LoginComponent{



//   temp:boolean;

//   constructor(private service:BackendService){

//     this.temp=true;

//   };

//   loggedInData = {

//     userName: '',

//     password: ''

//   };



//   submittedData = {

//     userName: '',

//     password: ''

//   };

//   submitLogin = () => {

//     console.log(this.loggedInData);

//     this.submittedData = this.loggedInData;

//     this.checkUser(this.submittedData);

//     // this.addUser(this.submittedData);

//   };



//   checkUser=(data:any)=>{

//     console.log(data);

//     this.service.searchUsers(data.userName,data.password)

//     .subscribe((response)=>{

//       if(response.valueOf()===data){

//         console.log(response.valueOf());

//         console.log(data);

//         this.temp=false;

//       }

//       else{

//         this.temp=true;

//       }

//     })

// }

// }




// }

//Class for Reactive Form

export class LoginComponent implements OnInit {



  loginForm: FormGroup;



  constructor(private service: BackendService,private router:Router) {

    this.loginForm = new FormGroup({});

    this.temp = true;

  };



  loggedInData = {

    userName: '',

    password: ''

  };



  ngOnInit(): void {

    this.loginForm = new FormGroup({

      userName: new FormControl(''),

      password: new FormControl('')

    });

  }

  temp: boolean;

  submitLogin = () => {

    this.loggedInData = this.loginForm.value;

    this.service.searchUsers(this.loggedInData.userName, this.loggedInData.password)

      .subscribe(response => {

        console.log(response);

        console.log(response.valueOf().toString().length);

        console.log(this.loggedInData);

        if (response.valueOf().toString().length!=0) {

          this.temp = true;

          this.router.navigate(['']);

        }

        else {

          this.temp = false;

          this.router.navigate(['/login']);

        }

        // console.log(this.temp);

      }

      )

  }

  // })}



  // .then()

  // .catch();




  // console.log(this.loginForm.value);

};



// //Class for template driven form




//   submitLogin = (login: any) => {

//     console.log(login.value);

//     this.submittedData = login.value;

//   };

