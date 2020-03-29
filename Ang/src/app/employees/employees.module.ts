import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplicationSharedResourcesModule} from '../application-shared-resources.module';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CanDeactiveCreateEmployeeGuard} from './can-deactive-create-employee.guard';

import { CreateEmloyeeComponent } from './create-emloyee/create-emloyee.component';
import { MoreEmployeeDetailsComponent } from './more-employee-details/more-employee-details.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [CreateEmloyeeComponent, MoreEmployeeDetailsComponent, StudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ApplicationSharedResourcesModule
  ],
  providers : [CanDeactiveCreateEmployeeGuard]
})
export class EmployeesModule { }
