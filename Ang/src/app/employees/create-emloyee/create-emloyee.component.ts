import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplicationSharedResourcesModule } from '../../application-shared-resources.module';
import { Employee } from '../models/employee.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-emloyee',
  templateUrl: './create-emloyee.component.html',
  styleUrls: ['./create-emloyee.component.css']
})
export class CreateEmloyeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  bsDatePickerConfig: any;
  constructor(private bootStrapDate: ApplicationSharedResourcesModule, private navigateroute: Router) {
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
  };

  // instead of creating these many fields we can import the class directly.
  // fullName: string;
  // email: string;

  ngOnInit(): void {
  }

  // (empDetails: NgForm)
  saveEmployee(): void {
    this.navigateroute.navigate(['/more']);
  }
  // testclick(empDetails: NgForm): void {
  //   console.log(empDetails);
  // }
}
