import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private service:BackendService){};
  
  user:any;
  
  registeredData = {
    username: '',
    password: ''
  };

  addData = (user: any) => {
    console.log(user.value);
    this.registeredData =user.value;
    this.addUser(this.registeredData);
  };

  addUser=(submittedData:any)=>{
      this.service.addUser(submittedData)
      .subscribe((response)=>{console.log(response.valueOf())})
      }
  }
