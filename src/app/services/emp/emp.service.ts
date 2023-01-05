import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }

  // dataUrl: string = './assets/users.json';
  // guide: https://jsonplaceholder.typicode.com/
  httpUrl: string = 'https://jsonplaceholder.typicode.com/users/';

  getAllEmployees = () => {
    return this.http.get(this.httpUrl);
  };

  getEmployeeById = (eid: number) => {
    return this.http.get(`${this.httpUrl}${eid}`);
  };

  // getEmployeeByName
  // getEmployeeByUserName
  // getEmployeeBySalaryGreaterThan

  addEmployee = (emp: any) => {
    return this.http.post(this.httpUrl, emp);
  };

  updateEmployee(emp: any) {
    return this.http.put(this.httpUrl, emp);
  }

  deleteEmployee(eid: number) {
    return this.http.delete(`${this.httpUrl}${eid}`);
  }
}
