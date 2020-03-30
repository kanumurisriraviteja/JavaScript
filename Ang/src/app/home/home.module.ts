import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ApplicationSharedResourcesModule} from '../application-shared-resources.module';
import { CarsService } from '../Services/cars.service';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [
    ApplicationSharedResourcesModule,
    BsDatepickerModule,
    BrowserAnimationsModule
  ],
  providers :[CarsService]
})
export class HomeModule { }
