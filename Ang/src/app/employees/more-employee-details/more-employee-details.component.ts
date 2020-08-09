import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTransportService } from '.././../Services/data-transport.service';

@Component({
  selector: 'app-more-employee-details',
  templateUrl: './more-employee-details.component.html',
  styleUrls: ['./more-employee-details.component.css']
})
export class MoreEmployeeDetailsComponent implements OnInit {

  fullEmployeeDetails: Employee = new Employee();
  messagestatus: string;

  fullEmployeeDetailsService: Employee = {
    name: '',
    email: '',
    gender: '',
    angular: false,
    dotnetcore: false,
    python: false,
    college: 'select',
    dob: null,
    address: ''
  };

  constructor(private activate: ActivatedRoute, private dataTransport: DataTransportService) {

  }

  ngOnInit(): void {

    // let a = this.activate.snapshot.params[''];
    // this is for the params in the object.
    this.activate.queryParams.subscribe(params => {
      this.fullEmployeeDetails.name = params.name;
      this.fullEmployeeDetails.email = params.email;
      this.fullEmployeeDetails.gender = params.gender;
      this.fullEmployeeDetails.angular = params.angular;
      this.fullEmployeeDetails.dotnetcore = params.dotnetcore;
      this.fullEmployeeDetails.python = params.python;
      this.fullEmployeeDetails.college = params.college;
      this.fullEmployeeDetails.dob = params.dob;
    });
    if (this.dataTransport.storage) {
      this.fullEmployeeDetailsService = this.dataTransport.storage;
    }
    console.log(this.fullEmployeeDetails);
    console.log(this.fullEmployeeDetailsService);

  }

  saveEmployee() {
    this.messagestatus = `Data saved to the database: ${JSON.stringify(this.fullEmployeeDetailsService)} `;
  }

}
