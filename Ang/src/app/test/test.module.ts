import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirsttestComponent } from './firsttest/firsttest.component';
import {ApplicationSharedResourcesModule} from '../Custom/application-shared-resources.module';

@NgModule({
  declarations: [FirsttestComponent],
  imports: [
    CommonModule,
    ApplicationSharedResourcesModule
  ]
})
export class TestModule { }
