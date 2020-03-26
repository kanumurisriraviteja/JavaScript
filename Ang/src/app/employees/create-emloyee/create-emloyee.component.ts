import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'

@Component({
  selector: 'app-create-emloyee',
  templateUrl: './create-emloyee.component.html',
  styleUrls: ['./create-emloyee.component.css']
})
export class CreateEmloyeeComponent implements OnInit {

  bsDatePickerConfig: Partial<BsDatepickerConfig>;
  constructor() {
    this.bsDatePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat :'DD/MM/YYYY'
      })

  }

  fullName: string;
  email: string;
  gender = 'male';
  angular = true;
  dotnetcore: boolean;
  python: boolean;
  college: string;
  dob: Date;

  ngOnInit(): void {
  }

  saveEmployee(empDetails: NgForm): void {
    console.log(empDetails);
  }
}
