import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {Employee} from './model/employee';
import {FormsModule}  from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    HomeComponentComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
