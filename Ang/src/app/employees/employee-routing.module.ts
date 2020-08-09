import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEmloyeeComponent } from './create-emloyee/create-emloyee.component';
import { MoreEmployeeDetailsComponent } from './more-employee-details/more-employee-details.component';
import { StudentComponent } from './student/student.component';

import { CanDeactiveCreateEmployeeGuard } from './can-deactive-create-employee.guard';

const routes: Routes =
  [
    {
      path: 'create', component: CreateEmloyeeComponent, canDeactivate :[CanDeactiveCreateEmployeeGuard]
    },
    {
      path: 'more', component: MoreEmployeeDetailsComponent  // 'more/:name' only few params
    },
    {
      path :'student', component : StudentComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
