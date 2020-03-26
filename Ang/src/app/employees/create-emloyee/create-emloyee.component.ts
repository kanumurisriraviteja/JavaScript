import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplicationSharedResourcesModule } from '../../application-shared-resources.module';


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
