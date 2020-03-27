import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplicationSharedResourcesModule } from '../../application-shared-resources.module';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-emloyee',
  templateUrl: './create-emloyee.component.html',
  styleUrls: ['./create-emloyee.component.css']
})
export class CreateEmloyeeComponent implements OnInit {

  bsDatePickerConfig: any;
  constructor(private bootStrapDate: ApplicationSharedResourcesModule) {
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
    dob: null
  };

  // instead of creating these many fields we can import the class directly.
  // fullName: string;
  // email: string;

  ngOnInit(): void {
  }

  // (empDetails: NgForm)
    saveEmployee(empDetails: Employee): void {
    console.log(empDetails);
  }
  // testclick(empDetails: NgForm): void {
  //   console.log(empDetails);
  // }
}
