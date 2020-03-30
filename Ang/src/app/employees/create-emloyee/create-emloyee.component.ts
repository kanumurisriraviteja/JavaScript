import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplicationSharedResourcesModule } from '../../application-shared-resources.module';
import { Employee } from '../models/employee.model';
import { Router, NavigationExtras } from '@angular/router';
import { DataTransportService } from '.././../Services/data-transport.service';

@Component({
  selector: 'app-create-emloyee',
  templateUrl: './create-emloyee.component.html',
  styleUrls: ['./create-emloyee.component.css']
})
export class CreateEmloyeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  bsDatePickerConfig: any;
  constructor(private bootStrapDate: ApplicationSharedResourcesModule, private navigateroute: Router,
              private dataTransport: DataTransportService) {

    this.bsDatePickerConfig = bootStrapDate.bsGenericDatePickerConfig;
  }

  employee: Employee = {
    name: '',
    email: '',
    gender: 'male',
    angular: true,
    dotnetcore: false,
    python: false,
    college: 'select',
    dob: null,
    address: ''
  }; // Here we can use new Employee() as well.

  // instead of creating these many fields we can import the class directly.
  // fullName: string;
  // email: string;

  ngOnInit(): void {
  }

  // (empDetails: NgForm)
  saveEmployee(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        name: this.employee.name,
        email: this.employee.email,
        gender: this.employee.gender,
        angular: this.employee.angular,
        dotnetcore: this.employee.dotnetcore,
        python: this.employee.python,
        college: this.employee.college,
        dob: this.employee.dob,
        address: this.employee.address
      },
      queryParamsHandling: 'preserve'
    };
    const newEmployee = Object.assign({}, this.employee);
    this.dataTransport.storage = newEmployee;
    this.createEmployeeForm.reset();  // Reset all the form details.
    this.navigateroute.navigate(['/employee/more'], navigationExtras);
  }

  // testclick(empDetails: NgForm): void {
  //   console.log(empDetails);
  // }
}
