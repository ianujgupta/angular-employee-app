import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees:Employee[]=[
    new Employee(1,"mohan",100),
    new Employee(2,"sohan",200),
    new Employee(3,"rohan",300)
  ];

}
