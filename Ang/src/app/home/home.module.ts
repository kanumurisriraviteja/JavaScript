import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ApplicationSharedResourcesModule } from '../application-shared-resources.module';
import { CarsService } from '../Services/cars.service';


@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [
    ApplicationSharedResourcesModule
  ],
  providers: [CarsService]
})
export class HomeModule { }
