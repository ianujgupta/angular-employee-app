import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employees:Employee[];
  newEmployee:any;
  constructor() { }

  ngOnInit(): void {
  }
 

  employee: Employee=undefined;
  addEmployee(form:any){
    let data = form.value;
    let id=data.id;
    let name=data.name;
    let salary=data.salary;
    this.employee = new Employee(id,name,salary);
    console.log("added");
  }

}
