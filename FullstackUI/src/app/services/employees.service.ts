import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  baseApiUrl: string = environment.baseApiUrl;

  //we are going to create a new method which will talk to our new api
  //This is a get method and it returns an Obselvable
  getAllEmployees(): Observable<Employee[]>
  {
   return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
  }

  addEmployee(addEmployeeRequest:Employee): Observable<Employee>{

    return this.http.post<Employee>(this.baseApiUrl + '/api/employees',addEmployeeRequest);
  }

  getEmployee(id:string): Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + '/api/employees/'+ id);

  }

  updateEmployee(id:string, updateEmployeeRequest:Employee): Observable<Employee>{
   return this.http.put<Employee>(this.baseApiUrl + '/api/employees/'+ id,updateEmployeeRequest)
  }

  deleteEmployee(id:string):Observable<Employee>{
    
   return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/'+ id);
  }
}
