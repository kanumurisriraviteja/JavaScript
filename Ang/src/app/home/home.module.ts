import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ApplicationSharedResourcesModule} from '../application-shared-resources.module';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ApplicationSharedResourcesModule,
    BsDatepickerModule,
    BrowserAnimationsModule
  ]
})
export class HomeModule { }
