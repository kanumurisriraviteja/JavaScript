import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ApplicationSharedResourcesModule } from '../application-shared-resources.module';
import { CanDeactiveCreateEmployeeGuard } from './can-deactive-create-employee.guard';

import { CreateEmloyeeComponent } from './create-emloyee/create-emloyee.component';
import { MoreEmployeeDetailsComponent } from './more-employee-details/more-employee-details.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [CreateEmloyeeComponent, MoreEmployeeDetailsComponent, StudentComponent],
  imports: [
    EmployeeRoutingModule,
    ApplicationSharedResourcesModule
  ],
  providers: [CanDeactiveCreateEmployeeGuard]
})
export class EmployeesModule { }
