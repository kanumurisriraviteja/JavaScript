import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustPipe} from './cp.pipe';



@NgModule({
  declarations: [CustPipe],
  imports: [
    CommonModule
  ],
  exports:[CustPipe]
})
export class ApplicationSharedResourcesModule { }
