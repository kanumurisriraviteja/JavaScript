import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-more-employee-details',
  templateUrl: './more-employee-details.component.html',
  styleUrls: ['./more-employee-details.component.css']
})
export class MoreEmployeeDetailsComponent implements OnInit {

  fullEmployeeDetails: Employee[];
  address: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee() {

  }

}
