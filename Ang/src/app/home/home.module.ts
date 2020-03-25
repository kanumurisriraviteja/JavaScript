import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildhomeComponent } from './childhome/childhome.component';
import { ParenthomeComponent } from './parenthome/parenthome.component'
import { ApplicationSharedResourcesModule} from '../Custom/application-shared-resources.module';


@NgModule({
  declarations: [ChildhomeComponent, ParenthomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ApplicationSharedResourcesModule
  ]
})
export class HomeModule { }
