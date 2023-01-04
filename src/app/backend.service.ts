import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'

})

export class BackendService {



  dataurl='assets/users.json';

  httpUrl:string='https://jsonplaceholder.typicode.com/users/';

  //HTTP Requests

  //GET,POST...

 

  getAllEmployees=()=>{

    return this.http.get('https://jsonplaceholder.typicode.com/users/');

  }



  getEmployeeById=(eid:number) => {

    return this.http.get(`https://jsonplaceholder.typicode.com/users/${eid}`);

  };

  //when you make get request, there are 2 possibilities: response and error

  getUserData=()=>{

    return this.http.get(this.dataurl);

  }



  addEmployee=(emp:any)=>{

    return this.http.post(this.httpUrl,emp);

  }

  httpUrl1:string ='http://localhost:12345/users';

  addUser=(user:any)=>{

    return this.http.post(this.httpUrl1,user);

  }

  getUsers=()=>{

    return this.http.get(this.httpUrl1);

  }

  searchUsers=(un:string,pwd:string)=>{

    return this.http.get(`http://localhost:12345/users/?userName=${un}&password=${pwd}`)

  }

  httpUrl2='http://localhost:12345/products'

  getProducts=()=>{

    return this.http.get('http://localhost:12345/products');

  }

  constructor(private http:HttpClient) { }

}