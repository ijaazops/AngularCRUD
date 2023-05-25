import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[]=[];

  //To use the http service we inject to the constuctor
  constructor(private employeesService:EmployeesService) { }

  ngOnInit(): void {
    //To call an external api we need to create a service and consume it 
    //This this returns an observable we have to subscribe for it to work
    this.employeesService.getAllEmployees()
    .subscribe({

      next: (employees) => {
        console.log(employees);
        this.employees=employees;
        
      },
      error: (response)=>{
        console.log(response)
      }
    })
  }

}
