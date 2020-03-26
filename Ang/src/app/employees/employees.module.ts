import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplicationSharedResourcesModule} from '../application-shared-resources.module';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CreateEmloyeeComponent } from './create-emloyee/create-emloyee.component';

@NgModule({
  declarations: [CreateEmloyeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ApplicationSharedResourcesModule
  ]
})
export class EmployeesModule { }
